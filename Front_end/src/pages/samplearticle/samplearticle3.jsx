/* eslint-disable no-unused-vars */
import { FaCalendarAlt } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import { FaRegUser } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import moment from 'moment';
function Samplearticle3() {
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');
  
    useEffect(() => {
      const storedComments = localStorage.getItem('comments');
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }, []);
  
    const handleAddComment = () => {
      if (newComment.trim() !== '') {
        const formattedComment = {
          id: Date.now().toString(),
          text: newComment,
          timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
        };
        const updatedComments = { ...comments, [formattedComment.id]: formattedComment };
        setComments(updatedComments);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
        setNewComment('');
      }
    };
  
    const handleDeleteComment = (id) => {
      const { [id]: deletedComment, ...remainingComments } = comments;
      setComments(remainingComments);
      localStorage.setItem('comments', JSON.stringify(remainingComments));
    };
    return (
        <div className="container mx-auto">
            <spanheader className="lg:flex  justify-center gap-7  ">
                <span className="lg:w-1/4 mt-7">
                    <h1 className="text-2xl font-semibold ">Danh Mục</h1>
                    <h1 className="mt-5">
                        <a href="/home">trang chủ</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="">sản phẩm</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/gioithieu">giới thiệu</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/news">tin tức</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/contact">liên hệ</a>
                    </h1>
                    <h1 className="mt-3 text-x">
                        <a href="/agency">địa lý</a>
                    </h1>

                    <section>
                        <h1 className="mt-7 text-2xl font-semibold ">TIN NỔI BẬT</h1>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img1-min.jpg?v=1507470322807"
                                alt=""
                                className="w-24 h-12"
                            />

                            <span>
                                <a href="/baivietmau">bài viết mẫu</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/small/100/260/640/articles/blog-list-img2-min.jpg?v=1507470340003"
                                alt=""
                                className="w-24 h-12"
                            />
                            <span>
                                <a href="/baivietmau2">bài viết mẫu 2</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                        <div className="flex mt-5 text-base gap-2">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/small/100/260/640/articles/blog-list-img3-min.jpg?v=1507470353707"
                                alt=""
                                className="w-24 h-12"
                            />

                            <span>
                                <a href="/baivietmau3">bài viết mẫu 3</a>
                                <h1 className="text-sm font-light ">23/1/2024</h1>
                            </span>
                        </div>
                    </section>
                    <spantags>
                        <span className="text-xl font-semibold ">
                            <h1 className="mt-9">THẺ TAGS</h1>
                        </span>

                        <div className="flex gap-4 items-center">
                            <Button radius="none" variant="bordered">
                                <a href="">Bông Tai</a>
                            </Button>
                            <Button radius="none" variant="bordered">
                                <a href=""> Cucumber</a>
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            <Button radius="none" variant="bordered">
                                <a href="">Dây chuyền</a>
                            </Button>
                            <Button radius="none" variant="bordered">
                                <a href=""> Mỹ phẩm</a>
                            </Button>
                            <Button radius="none" variant="bordered">
                                <a href="">tag</a>
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            <Button radius="none" variant="bordered">
                                <a href="">Thời trang</a>
                            </Button>
                            <Button radius="none" variant="bordered">
                                <a href="">Thời trang</a>
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-3 items-center">
                            <Button radius="none" variant="bordered">
                                <a href="">Trang sưc</a>
                            </Button>
                            <Button radius="none" variant="bordered">
                                <a href=""> Vòng tay</a>
                            </Button>
                        </div>
                    </spantags>
                    <spanimges>
                        <span>
                            <img
                                src="https://bizweb.dktcdn.net/100/260/640/themes/801977/assets/aside_banner.png?1676017321988"
                                alt=""
                                className="mt-12"
                            />
                        </span>
                    </spanimges>
                </span>

                {/* ảnh */}
                <spanbody>
                    <img
                        src="https://bizweb.dktcdn.net/100/260/640/articles/blog-list-img3-min.jpg?v=1507470353707"
                        alt=""
                        className="mt-4"
                    />

                    <h1 className="text-xl font-semibold mt-5">Bài viết mẫu</h1>

                    <span className="flex gap-5 mt-2">
                        <span className="flex gap-1">
                            <h1>
                                {' '}
                                <FaCalendarAlt />
                            </h1>
                            <h1 className="flex text-sm ">23/1/2024</h1>
                        </span>

                        <span className="flex gap-1">
                            <h1>
                                <FaRegComment />
                            </h1>
                            <h1 className="flex text-sm  "> 1 Bình luận</h1>
                        </span>
                    </span>
                    <spancommen>
                        <span className="text-base	mt-2">
                            <h1 style={{ width: '850px' }}>
                                Lorem Ipsum is simply dummy text of the rinting and typesetting
                                industry. Lorem Ipsum has been the industry standard dummy text ever
                                sincer they 1500s. Nullam id condimentum purus. In non ex at ligula
                                fringilla obortis. Ut et mauris auctor, aliquet nulla sed, aliquam
                                mauris. Vestibulum sed malesuada dolor Integer fringilla odio a
                                dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros
                                eleifend quis commodo Phasellus sodales volutpat diam, id sagittis
                                purus egestas dapibus. Donec bibendum est mi commodo blandit
                                Maecenas pellentesque, massa vitae faucibus consectetur, ante magna
                                gravida magna, ut venenatis massa augue et odio. Aliquam luctus
                                viverra velit, non euismod ligula congue sed.Mauris nunc sagittis
                                sollicitudin a ligula ut, iaculis bibendum lorem. Duis gravida
                                suscipit purus, at consequat diam leo, sit amet. Mauris sed nisl vel
                                urna egestas elementum eget quis ipsum. Nulla a enim et justo
                                facilisis ornare. Sed ante sem, dignissim a vehicula et, rutrum
                                volutpat turpis. Praesent id leo lacinia, malesuada tortor ut,
                                lobortis eo. Cras eget sollicitudin lorem. Etiam commodo ultricies
                                luctus. Integer porttitor ligula eget quam blandit finibus.
                                Suspendisse potenti. Nulla blandit augue orci, eget tristique massa
                                fermentum sed. Duis ac maximus nulla, et pharetra turpis.
                            </h1>
                        </span>
                        <span className="flex mt-8 gap-10">
                            <div className="flex gap-2 ">
                                <h1 className=" mt-1 ">
                                    <FaRegUser />
                                </h1>
                                <h1 className="font-thin">Admin</h1>
                            </div>

                            <span className="flex  gap-2">
                                <h1 className=" mt-1">
                                    <FaRegCalendarAlt />
                                </h1>
                                <h1 className="font-thin">27/09/2017</h1>
                            </span>
                        </span>
                        <span>
                            <div className="mt-10">
                                <hr />
                            </div>
                        </span>
                        <div>
      <h3>Số lượt bình luận: {Object.keys(comments).length}</h3> {/* Hiển thị số lượt bình luận */}
      <div>
        {Object.values(comments).map((comment) => (
          <div
            key={comment.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px',
            }}
          >
            <img
              src={`https://www.gravatar.com/avatar/${comment.id}?s=50&d=identicon`}
              alt={`Avatar ${comment.id}`}
              style={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                marginRight: '10px',
              }}
            />
            <div>
              <p>{comment.text}</p>
              <small>{comment.timestamp}</small>
              <button className='flex justify-end font-semibold text-xs text-red-500' onClick={() => handleDeleteComment(comment.id)}>Xóa</button>
            </div>
          </div>
        ))}
      </div>

      <h1><hr/></h1>
      <h2 className="font-semibold mt-2">Hãy Gửi Ý Kiến Cho Chúng Tôi</h2>

      <div className="flex gap-3 mt-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Hãy gửi cho tôi ý kiến"
          style={{
            border: '1px solid black',
            borderRadius: '5px',
            padding: '5px',
          }}
        />
        <Button className="font-semibold bg-blue-300" onClick={handleAddComment}>
          Gửi
        </Button>
      </div>
    </div>
                    </spancommen>
                </spanbody>
            </spanheader>
        </div>
    );
}

export default Samplearticle3;
