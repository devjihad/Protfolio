import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-87.5 md:w-187.5 lg:w-250 xl:w-275 2xl:w-350 mx-auto'>
            {children}
        </div>
    );
};

export default Container;