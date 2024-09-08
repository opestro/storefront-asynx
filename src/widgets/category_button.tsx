import { EmbaddedCategory } from "feeef";

// it take category form store as praameter
/**
 * Renders a category button component.
 *
 * @param onClick - The click event handler for the button.
 * @param category - The category object containing information about the category.
 * @param selected - Indicates whether the button is selected or not.
 * @returns The rendered category button component.
 */
const CategoryButton = ({
    onClick,
    category,
    selected = false
}: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    category: EmbaddedCategory,
    selected: boolean
}) => {
    return (
        <button
            aria-label={category.name}
            onClick={onClick}
            className={(selected ? "gb border-transparent" : "") + " border flex items-center justify-start  bg-transparent hover:bg-white hover:bg-opacity-10     focus:bg-opacity-10 font-medium rounded-lg text-sm px-4 py-2 text-center"}>
            {/* slot */}
            <div className="shrink-0">
                {
                    category.photoUrl && <img src={category.photoUrl || undefined} className="w-8 h-8 dark:invert" />
                }
            </div>
            <div className="w-2"></div>
            <div className='flex flex-col items-start justify-center overflow-hidden'>
                <span>
                    {category.name}
                </span>
                {/* style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" */}
                <span  className="font-light text-gray-600 dark:text-gray-400 text-xs md:text-sm lg:text-base whitespace-nowrap text-ellipsis">
                    {category.description}
                </span>
            </div>
        </button>
    )
}



export default CategoryButton;