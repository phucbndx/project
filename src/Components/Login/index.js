import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css'
import Body from '../Body';

// import { Link } from "react-router-dom";
import { BsPersonCircle, BsLockFill, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Login = () => {
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [path, setPath] = useState(false);
    const [remember, setRemember] = useState(true);

    function showPassWord() {

        if (show === false) {

            setShow(true)
        } else {
            setShow(false)

        }

        setShowPass(!showPass)
    }
    function rememberPass() {
        if (remember === true) {
            localStorage.setItem('userName', userName)
            localStorage.setItem('password', passWord)

            setRemember(false)
        }
        else {
            setRemember(true)
        }

    }


    return (
        <Container fluid >
            <Container>
                <Row>
                    <Col xl={3} className="d-none d-lg-block">1</Col>
                    <Col xl={6} className='' >
                        <div className="Login d-flex flex-column  justify-content-center align-content-center">
                            <h1 className="text-center mb-5">Login</h1>
                            <div className="form ">
                                <div className="userName ">
                                    <label className="my-2">UserName</label>
                                    <div className='d-flex iconUserName align-items-center'>
                                        <  BsPersonCircle className='mx-2' />
                                        <input type="text" placeholder='userName' className="py-2"
                                            value={userName}
                                            onChange={(e) => {
                                                setUserName(e.target.value);
                                                console.log(userName);


                                            }} />

                                    </div>
                                </div>
                                <div className="passWord">
                                    <label className="test my-2" >PassWord</label>
                                    <div className='d-flex iconPassWord align-items-center'>
                                        <BsLockFill className='mx-2' />
                                        <input type={showPass ? 'text' : 'password'} placeholder='PassWord' className="py-2 "
                                            value={passWord}
                                            onChange={(e) => {
                                                setPassWord(e.target.value)
                                                console.log(passWord);
                                            }}
                                        />
                                        <button className='bg-body border-0 ' onClick={showPassWord}>
                                            {show ? <BsEyeSlashFill className='fs-5' /> : <BsEyeFill className='fs-5' />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 form-check d-flex justify-content-between" >
                                <button className="border-0 bg-body" onClick={rememberPass} value={remember}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1"

                                    >Lưu mật khẩu</label>

                                </button>
                                <button className='bg-body border-0'>Quên mật khẩu</button>
                            </div>

                            <Link to={path} className='w-100 text-center rounded-3 py-2 bg-success border-0 bg-opacity-75 text-decoration-none text-black  fs-5 mt-5 '
                                onClick={() => {
                                    if (userName && passWord === 'admin') {
                                        setPath('../Body')
                                        console.log('da click');

                                    } else {
                                        alert('tên đăng nhập hoặc mật khẩu không đúng')
                                    }
                                }}


                            >Đăng Nhập</Link>

                        </div>
                    </Col>
                    <Col xl={3} className="d-none d-lg-block">3</Col>
                </Row>
            </Container >
        </Container>
    );
};

export default Login;