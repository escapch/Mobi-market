import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import BackLink from '../components/backLink';
import { selectProduct, setProducts } from '../redux/slice/productSlice';
import { useEffect } from 'react';
import axios from 'axios';

const MyProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  console.log(product);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://neobook.online/mobi-market/products/liked/`);
        console.log(data);
        // setPagination({
        //   page: data.page,
        //   count: data.count,
        //   next: data.next,
        //   previous: data.previous,
        // });

        dispatch(setProducts(data.results));
        console.log(data.results);
      } catch (e) {
        console.log('Error' + e);
        // setNavigate(true);
      }
    })();
  }, []);
  return (
    <div className="myproduct__wrapper">
      <header className="profile__settings">
        <div className="settings__top">
          <div className="top__back">
            <BackLink />
          </div>
          <div className="top__title">
            <p>Профиль</p>
          </div>
        </div>
      </header>
      <main>
        <div className="main__content">
          <div className="my__product">
            {product.map((item, i) => (
              <Card {...item} key={item.id} onClick={() => isOpenModal(i)} />
            ))}
          </div>
          <div className="pagination">1,2,3</div>
        </div>
      </main>
    </div>
  );
};

export default MyProduct;
