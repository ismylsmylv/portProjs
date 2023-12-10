import React, { useState } from 'react';

import {
    Button, ButtonGroup,
    Card,
    CardBody, CardFooter,
    Heading,
    Image,
    Stack
} from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import style from "../style/Layout.module.css";
library.add(fas, faTwitter, faFontAwesome, faHeart)






function CardRow({ elem }) {
    const [loginData, setloginData] = useState([]);
    const [blockCount, setBlockCount] = useState(0);
    const [friendCount, setfriendCount] = useState(0);
    const [isFriend, setIsFriend] = useState(false);
    const [sentBefore, setsentBefore] = useState(false);
    const [reqSent, setreqSent] = useState(false);
    const [block, setBlock] = useState([]);
    let loginId = JSON.parse(localStorage.getItem("loginId"))
    useEffect(() => {
        axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + loginId).then(res => {
            setloginData(res)
            setIsFriend(res.data.friends?.some((item) => item.id == elem.id) || false);
            setreqSent(res.data.requests?.some((item) => item.id == elem.id) || false);
            console.log(loginData)
        })
        setfriendCount((loginData.friends ? loginData.friends.length : 0));
    }, [loginId]);

    const blockUser = (elem) => {
        let updatedBlocked = loginData.blocked || []
        if (!loginData.blocked?.some((item) => item.id === elem.id)) {
            updatedBlocked.push({ "username": elem.username, "id": elem.id });
            axios.put(`https://654bcb115b38a59f28efb8ab.mockapi.io/users/${loginId}`, {
                ...loginData,
                blocked: updatedBlocked,
            }).then(() => {
                setBlock(updatedBlocked);
            })
        } else {
            console.log("already blocked");
        }
    };
    // const reqSentBefore = (elem) => {
    //     if (!loginData.requests?.some((item) => item.id === elem.id)) {
    //         setreqSent(true)
    //     }
    // };
    // useEffect(() => {
    //     reqSentBefore()
    // }, []);


    return (
        <>
            <Card maxW='sm' >
                <CardBody className={style.cardBody}>
                    <Image className={style.cardImg}
                        src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'> {elem.username}</Heading>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2' className={style.cardCart}>
                        {/* friend or add  */}
                        {isFriend ? (
                            <Button className={style.cardCartBtn} variant='solid' colorScheme='green'>
                                Friend
                            </Button>
                        ) : (

                            reqSent ? (
                                <Button
                                    className={style.cardCartBtn}
                                    variant='solid'
                                    colorScheme='cyan'
                                    data-id={elem.id}
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                >
                                    Request sent
                                </Button>) : (
                                <Button
                                    className={style.cardCartBtn}
                                    variant='solid'
                                    colorScheme='blue'
                                    data-id={elem.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        let req = elem.requests || [];
                                        let obj = {
                                            "username": loginData.username,
                                            "id": loginData.id
                                        };
                                        req.push(obj);
                                        axios.put("https://654bcb115b38a59f28efb8ab.mockapi.io/users/" + elem.id, {
                                            "username": elem.username,
                                            "password": elem.password,
                                            "friends": elem.friends,
                                            "requests": req,
                                            "blocked": elem.blocked,
                                            "id": elem.id
                                        });
                                        console.log("added request");
                                        // setsentBefore(true);
                                        setreqSent(true)
                                    }}
                                >
                                    Add friend
                                </Button>
                            )

                        )}

                        {/* Block Button */}
                        <Button
                            variant='solid'
                            colorScheme='red'
                            data-id={elem.id}
                            onClick={() => {
                                blockUser(elem);
                            }}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-ban" />
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card >
        </>
    );
}

export default CardRow;
