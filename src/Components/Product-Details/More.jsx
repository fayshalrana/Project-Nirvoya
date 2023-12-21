import React from 'react'

const More = ({ product }) => {
    return (
        <div>
            <div className="py-[20px] px-[50px] border">
                <h2 className='text-[24px] font-[500] leading-normal Poppins text-[#0198E9]'>Product details of {product.productName}</h2>
            </div>
            <div className=" pt-[25px] pb-[35px] border-b px-[50px] bg-white">
                <h3 className='text-[24px] font-[700] leading-normal pb-[20px] Lato text-[#333]'>See the best specifications of this product</h3>
                <div className="grid grid-cols-2">
                    <div className="">
                        <ul className='pl-[20px]'>
                            <li className='list-disc text-[18px] font-[400]  Lato text-[#333] leading-[34px]'>Size : M, L, XL</li>
                            <li className='list-disc text-[18px] font-[400] Lato text-[#333] leading-[34px]'>Product Type : Jogger</li>
                            <li className='list-disc text-[18px] font-[400] Lato text-[#333] leading-[34px]'>Main Material : Cotton</li>
                            <li className='list-disc text-[18px] font-[400] Lato text-[#333] leading-[34px]'>Gender : Male</li>
                            <li className='list-disc text-[18px] font-[400] Lato text-[#333] leading-[34px]'>Waist : Mid-rise</li>
                            <li className='list-disc text-[18px] font-[400] Lato text-[#333] leading-[34px]'>Zip : Fly</li>
                        </ul>

                    </div>
                    <div>
                        <ul className='pl-[20px]'>
                            <li className='list-disc text-[18px] font-[400]  Lato text-[#333] leading-[34px]'>Zipper : Yes</li>
                            <li className='list-disc text-[18px] font-[400]  Lato text-[#333] leading-[34px]'>Pocket : Two front and One Back Pockets.</li>
                            <li className='list-disc text-[18px] font-[400]  Lato text-[#333] leading-[34px]'>100% Authentic Product</li>
                            <li className='list-disc text-[18px] font-[400]  Lato text-[#333] leading-[34px]'>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-[25px] px-[50px] bg-white">
                <h3 className='text-[24px] font-[700] leading-normal pb-[20px] Lato text-[#333]'>Powerful intelligence for perfection</h3>
                <p className='text-[18px] font-[400]  Lato text-[#333]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? <br/><br/>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
                </p>
            </div>
        </div>
    )
}

export default More
