import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import HomeItem from './home/home-item';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getAllHomes, clearErrors } from '../redux/actions/homeActions';

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { homes, error } = useSelector(state => state.allHomes);

    useEffect(() => {
        dispatch(getAllHomes());
        toast.error(error);
        dispatch(clearErrors());
    }, [dispatch]);

    console.log('HOMES : ', homes)

    return(
        <>
            <section id='homes' className='container mt5'>
                <div className="row">
                    {homes && homes.length === 0 ?
                        <div className="alert alert-danger mt-5 w-100"><b>No Home Articles.</b></div>
                        :
                        homes && homes.map(home => (
                            <HomeItem 
                                key={home.id} 
                                id={home.id} 
                                title={home.title} 
                                image={home.image} 
                                paragraph1={home.paragraph1} 
                                paragraph2={home.paragraph2} 
                                created_at={home.created_at}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Home;