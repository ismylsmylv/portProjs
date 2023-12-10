import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { SimpleGrid, Card, CardBody, CardFooter, Stack, Image, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import style from '../style/Layout.module.css';
import { v4 as uuidv4 } from 'uuid';

function Block() {
    const [block, setBlock] = useState([]);
    const [userData, setuserData] = useState([]);
    let loginId = localStorage.getItem('loginId');

    useEffect(() => {
        axios(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`)
            .then((res) => {
                setBlock(res.data.blocked);
                setuserData(res.data);
            });
    }, []);

    const unblockUser = (username) => {
        axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
            blocked: block.filter((user) => user.username !== username),
        }).then(() => {
            setBlock((prevBlock) => prevBlock.filter((user) => user.username !== username));
        })
    };

    return (
        <>
            <Layout />
            <div className='main container'>
                <h2 className={`'thead' ${style.thead}`}>Blocked users</h2>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className={style.grid}>
                    {block.map((elem) => (
                        <Card key={uuidv4()} maxW='sm'>
                            <CardBody>
                                <Image
                                    className={style.cardImg}
                                    src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{elem.username}</Heading>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing='2' className={style.cardWishlist}>
                                    <Button
                                        className={style.cardCartBtn}
                                        variant='solid'
                                        colorScheme='green'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            unblockUser(elem.username);
                                        }}
                                    >
                                        Unblock
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </div>
        </>
    );
}

export default Block;
