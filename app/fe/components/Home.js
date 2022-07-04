import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import HomeItem from './home/home-item';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { clearErrors } from '../redux/actions/homeActions';

const Home = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { homes, error } = useSelector(state => state.allRooms)
}