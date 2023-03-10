import { addAllProducts, addProduct, removeProduct, updateOptionProduct, updatePriceProduct } from '../../services/slices/products-constructor-slice';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products, sections } from '../../utils/data';
import './Calculator.css';

const Calculator = () => {

    const dispatch = useDispatch();

    const { divisionData } = useSelector(store => store.divisionsNavigation);

    const { allProducts } = useSelector(store => store.productsConstructor);



    function createProductsStore() {
        const productsList = products.filter(product => {
            return product._key?.find(key => key === divisionData._key)
        })
        dispatch(addAllProducts([...productsList]))
    }


    function selectPrice(price) {

        if (typeof price === 'object') {
            return price[0];
        } else {
            return price;
        }
    }

    function selectOptionPrice(e, product) {

        if (e.target.value === 'local') {
            const productDataOption = { option: e.target.value, product };
            dispatch(updateOptionProduct(productDataOption));

            const productDataPrice = { price: product.prices[0], product }

            dispatch(updatePriceProduct(productDataPrice));
        } else if (e.target.value === 'network') {

            const productDataOption = { option: e.target.value, product };
            dispatch(updateOptionProduct(productDataOption))

            const productDataPrice = { price: product.prices[1], product }

            dispatch(updatePriceProduct(productDataPrice));
        } else {

            const productDataOption = { option: e.target.value, product };
            dispatch(updateOptionProduct(productDataOption))

            const productDataPrice = { price: product.prices[2], product }

            dispatch(updatePriceProduct(productDataPrice));
        }
    }

    useEffect(() => {
        createProductsStore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const totalPrice = useMemo(() => {
        return allProducts.reduce((acc, product) => acc + product.price * product.count, 0)
    }, [allProducts])


    //Форование вывода секциями

    const bosSectionProducts = useMemo(() => {
        return allProducts.filter(product => product.section === 1)
    }, [allProducts]);




    const actionsSectionProducts = useMemo(() => {
        return allProducts.filter(product => product.section === 2)
    }, [allProducts]);

    //подсекции

    const actionSectionWithoutSubsection = useMemo(() => {
        return actionsSectionProducts.filter(product => product.subsection === undefined);
    }, [actionsSectionProducts])

    const actionSectionMirrorSubsection = useMemo(() => {
        return actionsSectionProducts.filter(product => product.subsection === sections.find(section => section._type === 2).subsection_one);
    }, [actionsSectionProducts])

    const actionSectionTableSubsection = useMemo(() => {
        return actionsSectionProducts.filter(product => product.subsection === sections.find(section => section._type === 2).subsection_two);
    }, [actionsSectionProducts])

    const actionSectionVideobioSubsection = useMemo(() => {
        return actionsSectionProducts.filter(product => product.subsection === sections.find(section => section._type === 2).subsection_three);
    }, [actionsSectionProducts])





    const correctionSectionProducts = useMemo(() => {
        return allProducts.filter(product => product.section === 3)
    }, [allProducts]);

    //подсекции

    const correctionSectionWithoutSubsection = useMemo(() => {
        return correctionSectionProducts.filter(product => product.subsection === undefined);
    }, [correctionSectionProducts])

    const correctionSectionPsy3Subsection = useMemo(() => {
        return correctionSectionProducts.filter(product => product.subsection === sections.find(section => section._type === 3).subsection_one);
    }, [correctionSectionProducts])

    const correctionSectionTouch7Subsection = useMemo(() => {
        return correctionSectionProducts.filter(product => product.subsection === sections.find(section => section._type === 3).subsection_two);
    }, [correctionSectionProducts])




    const psySectionProducts = useMemo(() => {
        return allProducts.filter(product => product.section === 4)
    }, [allProducts]);

    //подсекции

    const psySectionWithoutSubsection = useMemo(() => {
        return psySectionProducts.filter(product => product.subsection === undefined);
    }, [psySectionProducts])

    const psySectionAddictionSubsection = useMemo(() => {
        return psySectionProducts.filter(product => product.subsection === sections.find(section => section._type === 4).subsection_one);
    }, [psySectionProducts])

    const psySectionCareerSubsection = useMemo(() => {
        return psySectionProducts.filter(product => product.subsection === sections.find(section => section._type === 4).subsection_two);
    }, [psySectionProducts])

    const psySectionSocioSubsection = useMemo(() => {
        return psySectionProducts.filter(product => product.subsection === sections.find(section => section._type === 4).subsection_three);
    }, [psySectionProducts])





    return (
        <section className='Calculator'>
            <div className='titleContainer'>
                <h2 className='calculatorTitle'>{divisionData?.title}</h2>
                <p className='calculatorSubtitle'>{divisionData?.subtitle}</p>
            </div>
            <div className='calculatorContainer'>
                <h2 className='calculatorName'>Конструктор-калькулятор</h2>
                <div className='calculateContainer'>
                    <ul className='calculateList'>

                        {
                            allProducts.length ? (

                                <>




                                    {
                                        bosSectionProducts?.length > 0 && (
                                            <>
                                                <h3 className='sectionMainTitle'>{sections.find(section => section._type === 1).mainTitle}</h3>
                                                {
                                                    bosSectionProducts.map((product, index) => (
                                                        <li className='calculateItem' key={index}>
                                                            <div className='nameContainer'>
                                                                <p className='itemName'>{product.name}</p>
                                                                {
                                                                    typeof product.prices === 'object' && (
                                                                        <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                            <div className='nameOption'>
                                                                                <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                    name={`version${product.id}`} value="local" defaultChecked />
                                                                                <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                            </div>
                                                                            <div className='nameOption'>
                                                                                <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                    name={`version${product.id}`} value="network" />
                                                                                <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                            </div>

                                                                            <div className='nameOption'>
                                                                                <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                    name={`version${product.id}`} value="networkFull" />
                                                                                <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className='priceContainer'>
                                                                <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                <p className='priceCurrency'>₽</p>
                                                            </div>
                                                            <div className='countContainer'>
                                                                <div className='countTextContainer'>
                                                                    <p className='productCount'>{product.count}</p>
                                                                    <p className='productCountCapture'>компл.</p>
                                                                </div>

                                                                <div className='countButtonContainer'>
                                                                    <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                    <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                        )
                                    }




                                    {
                                        actionsSectionProducts?.length > 0 && (
                                            <>
                                                <h3 className='sectionMainTitle'>{sections.find(section => section._type === 2).mainTitle}</h3>

                                                {
                                                    actionSectionWithoutSubsection.length > 0 && (
                                                        actionSectionWithoutSubsection.map((product, index) => (
                                                            <li className='calculateItem' key={index}>
                                                                <div className='nameContainer'>
                                                                    <p className='itemName'>{product.name}</p>
                                                                    {
                                                                        typeof product.prices === 'object' && (
                                                                            <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="local" defaultChecked />
                                                                                    <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                </div>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="network" />
                                                                                    <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                </div>

                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="networkFull" />
                                                                                    <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                                <div className='priceContainer'>
                                                                    <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                    <p className='priceCurrency'>₽</p>
                                                                </div>
                                                                <div className='countContainer'>
                                                                    <div className='countTextContainer'>
                                                                        <p className='productCount'>{product.count}</p>
                                                                        <p className='productCountCapture'>компл.</p>
                                                                    </div>

                                                                    <div className='countButtonContainer'>
                                                                        <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                        <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    )}


                                                {
                                                    actionSectionMirrorSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 2).subsectionTitle_one}</h2>

                                                            {
                                                                actionSectionMirrorSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}


                                                {
                                                    actionSectionTableSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 2).subsectionTitle_two}</h2>

                                                            {
                                                                actionSectionTableSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}


                                                {
                                                    actionSectionVideobioSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 2).subsectionTitle_three}</h2>

                                                            {
                                                                actionSectionVideobioSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </>
                                                    )}


                                            </>
                                        )
                                    }




                                    {
                                        correctionSectionProducts?.length > 0 && (
                                            <>
                                                <h3 className='sectionMainTitle'>{sections.find(section => section._type === 3).mainTitle}</h3>


                                                {
                                                    correctionSectionWithoutSubsection.length > 0 && (
                                                        correctionSectionWithoutSubsection.map((product, index) => (
                                                            <li className='calculateItem' key={index}>
                                                                <div className='nameContainer'>
                                                                    <p className='itemName'>{product.name}</p>
                                                                    {
                                                                        typeof product.prices === 'object' && (
                                                                            <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="local" defaultChecked />
                                                                                    <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                </div>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="network" />
                                                                                    <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                </div>

                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="networkFull" />
                                                                                    <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                                <div className='priceContainer'>
                                                                    <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                    <p className='priceCurrency'>₽</p>
                                                                </div>
                                                                <div className='countContainer'>
                                                                    <div className='countTextContainer'>
                                                                        <p className='productCount'>{product.count}</p>
                                                                        <p className='productCountCapture'>компл.</p>
                                                                    </div>

                                                                    <div className='countButtonContainer'>
                                                                        <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                        <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    )}


                                                {
                                                    correctionSectionPsy3Subsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 3).subsectionTitle_one}</h2>

                                                            {
                                                                correctionSectionPsy3Subsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}


                                                {
                                                    correctionSectionTouch7Subsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 3).subsectionTitle_two}</h2>

                                                            {
                                                                correctionSectionTouch7Subsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}

                                            </>
                                        )
                                    }




                                    {
                                        psySectionProducts?.length > 0 && (
                                            <>
                                                <h3 className='sectionMainTitle'>{sections.find(section => section._type === 4).mainTitle}</h3>


                                                {
                                                    psySectionWithoutSubsection.length > 0 && (
                                                        psySectionWithoutSubsection.map((product, index) => (
                                                            <li className='calculateItem' key={index}>
                                                                <div className='nameContainer'>
                                                                    <p className='itemName'>{product.name}</p>
                                                                    {
                                                                        typeof product.prices === 'object' && (
                                                                            <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="local" defaultChecked />
                                                                                    <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                </div>
                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="network" />
                                                                                    <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                </div>

                                                                                <div className='nameOption'>
                                                                                    <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                        name={`version${product.id}`} value="networkFull" />
                                                                                    <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                                <div className='priceContainer'>
                                                                    <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                    <p className='priceCurrency'>₽</p>
                                                                </div>
                                                                <div className='countContainer'>
                                                                    <div className='countTextContainer'>
                                                                        <p className='productCount'>{product.count}</p>
                                                                        <p className='productCountCapture'>компл.</p>
                                                                    </div>

                                                                    <div className='countButtonContainer'>
                                                                        <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                        <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    )}


                                                {
                                                    psySectionAddictionSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 4).subsectionTitle_one}</h2>

                                                            {
                                                                psySectionAddictionSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}


                                                {
                                                    psySectionCareerSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 4).subsectionTitle_two}</h2>

                                                            {
                                                                psySectionCareerSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }

                                                        </>
                                                    )}


                                                {
                                                    psySectionSocioSubsection.length > 0 && (
                                                        <>
                                                            <h2 className='subsectionTitle'>{sections.find(section => section._type === 4).subsectionTitle_three}</h2>

                                                            {
                                                                psySectionSocioSubsection.map((product, index) => (
                                                                    <li className='calculateItem' key={index}>
                                                                        <div className='nameContainer'>
                                                                            <p className='itemName'>{product.name}</p>
                                                                            {
                                                                                typeof product.prices === 'object' && (
                                                                                    <div className='nameOptionContainer' onChange={(e) => selectOptionPrice(e, product)}>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`local${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="local" defaultChecked />
                                                                                            <label htmlFor={`local${product.id}`}>Локальная версия</label>
                                                                                        </div>
                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`network${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="network" />
                                                                                            <label htmlFor={`network${product.id}`}>Сетевая версия на 6 рабочих мест</label>
                                                                                        </div>

                                                                                        <div className='nameOption'>
                                                                                            <input type="radio" id={`networkFull${product.id}`} className='radioButton'
                                                                                                name={`version${product.id}`} value="networkFull" />
                                                                                            <label htmlFor={`networkFull${product.id}`}>Сетевая версия «без ограничений»</label>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div className='priceContainer'>
                                                                            <p className='productPrice'>{selectPrice(product.price)}</p>
                                                                            <p className='priceCurrency'>₽</p>
                                                                        </div>
                                                                        <div className='countContainer'>
                                                                            <div className='countTextContainer'>
                                                                                <p className='productCount'>{product.count}</p>
                                                                                <p className='productCountCapture'>компл.</p>
                                                                            </div>

                                                                            <div className='countButtonContainer'>
                                                                                <button className='countButton' onClick={() => { dispatch(addProduct(product)) }}>+</button>
                                                                                <button className='countButton' onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            }
                                                        </>
                                                    )}

                                            </>
                                        )
                                    }




                                </>

                            ) : (<p className='productsAttention'>Нет доступных</p>)
                        }
                    </ul>


                    <div className='totalPriceContainer'>
                        <div className='totalPrice'>
                            <p className='priceCapture'>Цена:</p>
                            <p className='priceNumber'>{totalPrice}</p>
                            <p className='totalPriceCurrency'>₽</p>
                        </div>
                        {/* 

                        Секция скидки ( ОТКЛЮЧЕНО )
                        
                        <div className='discountContainer'>
                            <div className='totalDiscount'>
                                <p className='discountCapture'>Размер скидки:</p>
                                <p className='discountNumber'>{totalDiscountPrice.discount} %</p>
                            </div>
                            <div className='totalDiscountPrice'>
                                <p className='priceDiscountCapture'>Итоговая цена:</p>
                                <p className='priceDiscountNumber'>{totalDiscountPrice.price}</p>
                                <p className='priceDiscountCurrency'>₽</p>
                            </div>
                        </div> */}

                    </div>
                    <button className='calculatorSaveButton'>Сохранить</button>


                </div>


            </div>

        </section>
    );
}

export default Calculator;