import React, { FC } from 'react';



interface Props {
    name?: string
}


const Home: FC<Props> = (props) => {
    return <div>{props.name || '哈哈'}</div >
}


export default Home