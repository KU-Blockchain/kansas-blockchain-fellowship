"use client";
import React, { useEffect, useState } from 'react';
import { Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Center, Spinner } from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = ({ isOpen, onClose }) => {
    const { verifyUser } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [jwtChallenge, setJwtChallenge] = useState(null);
    const [jwtChallengeUrl, setJwtChallengeUrl] = useState('jwtChallengeUrl');

    useEffect(() => {
        if (isOpen) {
            const getJWT = async() => {
                //const response = await fetch('../api/QuickLoginJWT'); moving to the kbf server to fetch JWT
                const response = await fetch(`https://api.kublockchain.com/api/QuickLoginJWT`);

                if (response.ok) {
                    const data = await response.json();
                    setJwtChallenge(data.loginChallenge);
                    setJwtChallengeUrl(data.loginChallengeUrl);
                    return data;
                } else {
                    console.error('Error connecting to WebSocket:', response.statusText);
                }
            };

            getJWT();
        }
    }, [isOpen]);

    useEffect(() => {
        if (jwtChallenge) {
            const connectWebSocket = async () => {
                if (jwtChallenge) {
                    console.log('Connecting to WebSocket...');
                    console.log('jwtChallenge:', jwtChallenge)
                    // const response = await fetch('../api/QuickLoginSocket', {   moving to the kbf server to get socket data
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    //     body: JSON.stringify({ jwtChallenge: jwtChallenge }),
                    // });
                    const response = await fetch(`https://api.kublockchain.com/api/QuickLoginSocket`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ jwtChallenge: jwtChallenge }),
                    });

                    if (response.ok) {
                        const result = await response.json();
                        setMessage(result);
                    } else {
                        console.error('Error connecting to WebSocket:', response.statusText);
                    }
                }
            };

            connectWebSocket();
        }
    }, [jwtChallenge]);

    useEffect(() => {
        if (message) {
            const handleVerify = () => {
                verifyUser(message);
                navigate("/dashboard");
            };

            handleVerify();
        }
    }, [message]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading as="h1" size="1xl">QuickLogin</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Center w="100%">
                    {jwtChallenge ? (
                        <QRCode size={256} value={jwtChallengeUrl} />
                    ) : (
                        <Spinner
                            my={6}
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    )}
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default Login;
