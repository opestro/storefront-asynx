import { ProductVariant, ProductVariantOption } from "feeef/src/core/core";
import { dartColorToCss } from "../main";

/**
 * Renders a variant button based on the variant type.
 * @param variant - The variant option.
 * @param selected - Indicates if the button is selected.
 * @param onClick - The callback function to be called when the button is clicked.
 * @returns The rendered variant button.
 */
export function VariantButton({ variant, selected = false, onClick }: { variant: ProductVariantOption, selected?: boolean, onClick?: () => void }) {
    if (variant.type === "color") {
        return <ColorVariantButton variant={variant} selected={selected} onClick={onClick} />
    } else if (variant.type === "image") {
        return <ImageVariantButton variant={variant} selected={selected} onClick={onClick} />
    }
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100"}>
            {variant.name}
        </div>
    )

    return (
        <div onClick={onClick} className={(selected ? "border-primary" : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}

/**
 * Renders a color variant button.
 *
 * @param variant - The variant option for the button.
 * @param selected - Indicates whether the button is selected.
 * @param onClick - The callback function to be called when the button is clicked.
 * @returns The rendered color variant button.
 */
function ColorVariantButton({ variant, selected = false, onClick }: { variant: ProductVariantOption, selected?: boolean, onClick?: () => void }) {
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 min-w-14 px-2 h-8 rounded-full  bg-opacity-5  focus:bg-opacity-100"}
            style={{ backgroundColor:variant.value? dartColorToCss(variant.value) : "#000000" }}
        >
        </div>)

    return (
        <div onClick={onClick} className={(selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-full p-[2px] border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}

/**
 * Renders an image variant button.
 *
 * @param variant - The variant option for the button.
 * @param selected - Indicates whether the button is selected.
 * @param onClick - The callback function to be called when the button is clicked.
 * @returns The rendered image variant button.
 */
function ImageVariantButton({ variant, selected = false, onClick }: { variant: ProductVariantOption, selected?: boolean, onClick?: () => void }) {
    const child = (
        <div className={"cursor-pointer flex justify-center items-center border-transparent overflow-hidden shadow-xl border-2 w-14 h-14 rounded-full  bg-opacity-5  focus:bg-opacity-100"}>
            <img src={variant.value} className="w-full h-full object-cover" />
        </div>)

    return (
        <div onClick={onClick} className={(selected ? "border-primary   " : " dark:border-white border-black border-opacity-20") + " rounded-full border-2 mx-1 my-1 flex justify-center items-center"}>
            {child}
        </div>
    )
}

/**
 * Renders a variant group with selectable options.
 * 
 * @param variantGroup - The variant group to render.
 * @param path - The current path of selected options.
 * @param onPathChange - Callback function to update the path of selected options.
 * @param onSelect - Optional callback function when a variant option is selected.
 */
function RenderVariantGroup({ variantGroup, path, onPathChange, onSelect }: {
    variantGroup: ProductVariant, path: string[], onPathChange: (path: string[]) => void
    onSelect?: (variant: ProductVariantOption) => void
}
) {
    var selected: string | null = null;
    var rest: string[] = [];
    if (path.length) {
        selected = path[0];
        rest = path.slice(1);
    }
    function getVariant(name: string): ProductVariantOption | null {
        return variantGroup.options?.find((option) => option.name === name) || null;
    }
    function toggle(variant: ProductVariantOption) {
        selected = variant.name;
        onPathChange([selected])
    }
    return (
        <div>
            <div className="h-1"></div>
            <h3 className="text-sm font-medium">{variantGroup.name}
                {
                    getVariant(selected!) &&
                    <span dir="ltr" className="mx-2 bg-primary text-white rounded-full">
                        <span className="px-2">{getVariant(selected!)?.name}</span>
                    </span>
                }{
                    getVariant(selected!)?.stock !== undefined &&
                    <span className="  text-primary rounded-full px-2">
                        {getVariant(selected!)?.stock} متوفر
                    </span>
                }

            </h3>
            <div className="flex flex-wrap">
                {variantGroup.options?.map((variant, index) => (
                    <span key={index}
                        className={(
                            variant.stock === 0 ?
                                "opacity-30" : "") +
                            " flex items-center justify-center "
                        }
                    >

                        <span className="relative flex items-center justify-center">
                            {
                                variant.hint &&

                                <span dir="ltr" className={
                                    (selected === variant.name ? "bg-primary" : "bg-gray-600") +
                                    " text-[8px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none"}>
                                    <span className="px-1">{variant.hint}</span>
                                </span>
                                || variant.type === "color" &&variant.name &&
                                <span dir="ltr" className={
                                    (selected === variant.name ? "bg-primary" : "bg-gray-600") +
                                    " text-[8px] bottom-0 absolute mx-2  text-white rounded-full  pointer-events-none"}>
                                    <span className="px-1">{variant.name}</span>
                                </span>
                            }
                            <VariantButton
                                onClick={() => {
                                    if (variant.stock !== 0) {
                                        toggle(variant)
                                    }
                                    onSelect?.(variant);
                                }}
                                selected={selected === variant.name}
                                variant={variant} />
                        </span>

                    </span>
                ))}
            </div>
            {
                selected &&
                getVariant(selected)?.child &&
                <RenderVariantGroup
                    variantGroup={getVariant(selected)!.child!}
                    path={rest}
                    onPathChange={
                        // sub path
                        (path) => onPathChange([selected!, ...path])
                    }
                />
            }
        </div>
    )
}



export default RenderVariantGroup;