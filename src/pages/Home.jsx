import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';

import Header from '../components/Header';
import Card from '../components/Card';
import { selectProduct, setProducts } from '../redux/slice/productSlice';
import CardModal from '../components/Modals/CardModal';
import { openModal } from '../redux/slice/modal.slice';
import CompleteRegistr from '../components/Modals/CompleteRegistr';

const Home = () => {
  const [navigate, setNavigate] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    count: 0,
    next: '',
    previous: '',
  });
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const modalIsOpen = useSelector((state) => state.modalReducer.modalIsOpen);
  const completeRegModal = useSelector((state) => state.modalReducer.completeRegModal);

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
        // setNavigate(true);
      }
    })();
  }, []);

  const isOpenModal = (id) => {
    setIndex(id);
    // dispatch(openModal(true));
    dispatch(openModal({ modalName: 'modalIsOpen', value: true }));
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
              <Card {...item} key={item.id} onClick={() => isOpenModal(i)} />
            ))}
            {modalIsOpen && <CardModal value={product[index]} />}
            {completeRegModal && <CompleteRegistr />}
          </div>
        </section>
        <div className="home__pagination">123</div>
      </div>
    </div>
  );
};

export default Home;
