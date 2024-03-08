import { StoreCategoryModel } from "../pishop/models"

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
    category: StoreCategoryModel,
    selected: boolean
}) => {
    return (
        <button
            onClick={onClick}
            className={(selected ? "gb border-transparent" : "") + " border flex items-center justify-start  bg-transparent hover:bg-white hover:bg-opacity-10     focus:bg-opacity-10 font-medium rounded-lg text-sm px-4 py-2 text-center"}>
            {/* slot */}
            <div>
                {
                    category.icon && <img src={category.icon || undefined} className="w-8 h-8 dark:invert" />
                }
            </div>
            <div className="w-2"></div>
            <div className='flex flex-col items-start justify-center'>
                <span>
                    {category.name}
                </span>
                <span className="font-light text-gray-600">
                    {category.description}
                </span>
            </div>
        </button>
    )
}



export default CategoryButton;