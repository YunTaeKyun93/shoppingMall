import React, {useState} from 'react';

const useState, useEffect, useMemo....;

Comp();
// useState (1)
// useState (2) 
// useEffect (3)
// useState (4)
// useMemo (5)
// useState (6)


/*
(1)
if (something) {
    const [name, setName] = useState('');
}
const [age, setAge] = useState('');

const [a, a_] = useState('');
const [b, b_] = useState('');

(2)
// const [name, setName] = useState('');
const [age, setAge] = useState(''); // name
const [gender, setGender] = useState(''); // age
const [country, setCountry] = useState(''); // gender

// Hook: 5, Now: 4개??(에러!!)

return <div>{name}</div>;

*/

// use import!

const loadFromFile = () => {
    const fs = import('fs');
    const text = fs.readFileSync('./my-text.txt');
};

const MyComp = () => {
    
    const [name, setName] = useState('');

    let name, setName;
    if (isPerson) {
        const [name_, setName_] = useState('');
        name = name_;
        setName = setName_;
    } // Rules of Hooks 위반

    let isCouponsChecked = [];
    for (let i = 0; i < coupons.length; ++i) {
        isCouponsChecked.push(useState(false));
    } // Rules of Hooks 위반

    const navigateToMainPage = () => {
        const navigate = useNavigate();

        navigate('/');
    }; // Rules of Hooks 위반

    if (coupons.length === 0) {
        return <div>쿠폰이 없습니다.</div>;
    }

    const [currentCoupon, setCurrentCoupon] = useState(undefined);
    // Rules of Hooks 위반

    return <div>내 컴포넌트</div>;
};

// MyComp
/*
이전에 MyComp를 렌더링했을때 호출된 후크가 호출되어야 함.
*/

