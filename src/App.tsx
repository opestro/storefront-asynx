import { useState } from 'react'
import './App.css'
import { IconFlag } from '@tabler/icons-react'
import { StoreCategoryModel, StoreModel } from './models'
import { ProductCard } from './widgets/product_card'
import Navbar from './widgets/navbar'
import Footer from './widgets/footer'
import AsynxWave from './widgets/asynx_wave'




// category button
// it take category form store as praameter
const CategoryButton = ({
  onClick,
  category, selected = false }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    category: StoreCategoryModel, selected: boolean
  }) => {
  return (
    <button
      onClick={onClick}
      className={(selected ? "gb border-transparent" : "") + " border flex items-center justify-start  bg-transparent hover:bg-white hover:bg-opacity-10     focus:bg-opacity-10 font-medium rounded-lg text-sm px-4 py-2 text-center"}>
      {/* slot */}
      <div>
      {
        category.icon &&<img src={category.icon || undefined} className="w-8 h-8 dark:invert"
        />
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


function App({ store }: { store: StoreModel}) {
  const [selectedCategory, setSelectedCategory] = useState<StoreCategoryModel | null>(null)

  const filteredProducts = store?.products?.filter((product) => !selectedCategory ? true : product.categories?.map((category) => category.name).includes(selectedCategory?.name || "")) || []

  return (
    <>

      <Navbar store={store}></Navbar>
      {/* 70px space */}


      {/* main container */}
      <div className="text-center relative max-w-screen-xl mx-auto px-4  sm:px-6 sm:py-10 lg:px-8">
        <AsynxWave
          className='pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-xl'
        ></AsynxWave>
        <div className="z-10 relative">
          <div className='relative flex items-center justify-center'>
            <h4 className=" absolute
          font-extrabold text-base dark:text-gray-50 tracking-wide uppercase">
              {store?.name}
            </h4>
            <AsynxWave></AsynxWave>
          </div>
          <h1 className="title-font font-light mt-1 text-4xl text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {store?.title}
          </h1>
          <p className="max-w-xl mt-5 mx-auto  text-gray-500 dark:text-gray-400
            font-extralight
            text-s
            md:text-m
            lg:text-l
          ">
            {store?.description}
          </p>
        </div>
      </div>
      {/* categories */}
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {store?.categories?.map((category,index) => (
            <CategoryButton key={index} onClick={() => {
              return (selectedCategory == category) ? setSelectedCategory(null) :
                setSelectedCategory(category)
            }} selected={selectedCategory?.name == category.name} category={category}></CategoryButton>
          ))}
        </div>
      </div>

      <div className="h-4"></div>

      {/* products */}
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product,index) => (
            <div key={index} >
              <ProductCard product={product}></ProductCard>
            </div>
          ))}

          {
            !filteredProducts.length &&
            <div className="col-span-full">
              <div className="py-4 flex flex-col items-center justify-center">
                <IconFlag></IconFlag>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">لا يوجد منتجات</h3>
                <p className="text-gray-400 dark:text-gray-500">لا يوجد منتجات في هذه الفئة</p>
                {/* remove selected cate */}
                <div className="h-3"></div>
                <button onClick={() => setSelectedCategory(null)} className="gb btn">إزالة التصفية</button>
              </div>
            </div>
          }
        </div>
      </div>

      {/* footer */}
      <Footer store={store}></Footer>








    </>
  )
}

export default App