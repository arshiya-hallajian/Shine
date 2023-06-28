import React from 'react';
import './Category.css';
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
export default function Category() {
    return (
        <div className='Category'>
            <ProductTopbar />
            <ProductPage_general />
            <Breadcrumb
                links={[
                    { id: 1, title: "خانه", to: "/", isThisEnd: false },
                    {
                        id: 2,
                        title: "فروشگاه",
                        to: "/category",
                        isThisEnd: true
                    },

                ]}
            />

            <main className='main-category'>
                <div className='all-category-products'>
                    <section>
                        <div>
                            <p>نمایش :</p>
                            <p className='active-product-show-number'>9</p>
                            <span>/</span>
                            <p>12</p>
                            <span>/</span>
                            <p>18</p>
                            <span>/</span>
                            <p>24</p>
                        </div>

                        <select name="" id="">

                            <option value="menu_order" selected="selected">مرتب‌سازی پیش‌فرض</option>
                            <option value="popularity">مرتب‌سازی بر اساس محبوبیت</option>
                            <option value="rating">مرتب‌سازی بر اساس امتیاز</option>
                            <option value="date">مرتب‌سازی بر اساس آخرین</option>
                            <option value="price">مرتب‌سازی بر اساس ارزانترین</option>
                            <option value="price-desc">مرتب‌سازی بر اساس گرانترین</option>

                        </select>

                    </section>

                    <main>
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />
                        <CategoryItem />


                    </main>
                </div>
                <div className='all-category-filter'>

                    <section className="store-status">
                        <p className="store-status-title">وضعیت موجودی انبار:</p>
                        <div class="form-check mt-3 mb-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    حراج
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    موجود
                                </label>
                        </div>
                    </section>

                    <section className="filter-section mt-4">
                        <p className="filter-section-title">فیلتر بر اساس رنگ:</p>
                        <div className='mt-4'>
                            <p>طلایی</p>
                            <span className='filter-section-span'>4</span>
                        </div>
                        <div>
                            <p>نقره ای</p>
                            <span className='filter-section-span'>4</span>
                        </div>
                        <div>
                            <p>نوک مدادی</p>
                            <span className='filter-section-span'>4</span>
                        </div>
                        <div>
                            <p>مشکی</p>
                            <span className='filter-section-span'>4</span>
                        </div>
                        <div>
                            <p>کرمی</p>
                            <span className='filter-section-span'>4</span>
                        </div>
                    </section>

                    <section className="filter-section mt-4">
                        <p className="filter-section-title">فیلتر بر اساس سایز:</p>
                        <div className='mt-4'> 
                            <p>L</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                        <div>
                            <p>M</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                        <div>
                            <p>S</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                        <div>
                            <p>X</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                        <div>
                            <p>XS</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                    </section>


                    <section className="filter-section mt-4">
                        <p className="filter-section-title">فیلتر بر اساس برند:</p>
                        <div  className='mt-4'>
                            <p>Rolex</p>
                            <span className='filter-section-span'>2</span>
                        </div>
                        <div>
                            <p>LV</p>
                            <span className='filter-section-span'>3</span>
                        </div>
                        <div>
                            <p>Guess</p>
                            <span className='filter-section-span'>2</span>
                        </div>
                        <div>
                            <p>Tiffany</p>
                            <span className='filter-section-span'>2</span>
                        </div>
                        <div>
                            <p>Gucci</p>
                            <span className='filter-section-span'>1</span>
                        </div>
                    </section>

                </div>
            </main>


        </div>
    )
}
