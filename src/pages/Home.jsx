import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

import Header from '../components/Header';
import Card from '../components/Card';
import { selectProduct, setProducts } from '../redux/slice/productSlice';
import CardModal from '../components/Modals/CardModal';

const Home = () => {
  const [navigate, setNavigate] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    count: 0,
    next: '',
    previous: '',
  });
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://neobook.online/mobi-market/products?page=${pagination.page}&limit=32`,
        );
        console.log(data);
        setPagination({
          page: data.page,
          count: data.count,
          next: data.next,
          previous: data.previous,
        });

        dispatch(setProducts(data.results));
        console.log(data.results);
      } catch (e) {
        console.log('Error' + e);
        setNavigate(true);
      }
    })();
  }, []);

  const openModal = (id) => {
    console.log(product[id]);
  };

  return (
    <div className="home">
      <div className="home__container">
        <header className="home__header">
          <Header />
        </header>
        <section className="home__content">
          <div className="products">
            {product.map((item, i) => (
              <Card {...item} key={item.id} onClick={() => openModal(i)} />
            ))}
            {modal && <CardModal />}
          </div>
        </section>
        <div className="home__pagination">123</div>
      </div>
    </div>
  );
};

export default Home;
