import React, { useState, useEffect } from 'react'
import { List } from 'antd';
import { Row, Col, Menu, Dropdown } from 'antd';
import moment from 'moment'
import Geocode from 'react-geocode'

import Pin from '../assets/pin-svg-25px.svg'
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import RepostButton from './RepostButton';

import { EllipsisOutlined } from '@ant-design/icons';


Geocode.setApiKey("AIzaSyBM6YuNkF6yev9s3XpkG4846oFRlvf2O1k")

Geocode.setLanguage("id");

export default function PostCard({ post, loading }) {
  console.log(post);
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (post.location) {
            Geocode.fromLatLng(post.location.lat, post.location.lng).then(
                response => {
                    const address = response.results[0].address_components[1].short_name;
                    setAddress(address);
                },
                error => {
                    console.error(error)
                }
            );
        }
    }, [post])

    return (
        <List
            itemLayout="vertical"
            size="large" >
            <List.Item
                key={post.id}
                actions={
                    !loading && [
                      <Row gutter={[48, 0]}>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <LikeButton likeCount={ post.likeCount } likes={post.likes} id={ post.id } />
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <CommentButton commentCount={ post.commentCount } />
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <RepostButton />
                        </Col>
                      </Row>
                    ]}>
                <List.Item.Meta
                extra={<a href="#" />}
                  title={<div>
                    <Row>
                      <Col span={12}>
                      <a href={`/post/${post.id}`} style={{fontSize: 15}}><img src={Pin} style={{ width: 15, marginTop: -4 }} />{address}</a>
                      </Col>
                      <Col span={12} style={{textAlign: "right"}}>
                        <Dropdown overlay={
                          <Menu>
                          <Menu.Item key="0">
                            Subscribe
                          </Menu.Item>
                          <Menu.Item key="1" onClick={e=> console.log(e)}>
                            Mute
                          </Menu.Item>
                          <Menu.Item key="3">
                            Report
                          </Menu.Item>
                        </Menu>
                        } trigger={['click']} placement="bottomRight">
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <EllipsisOutlined />
                        </a>
                      </Dropdown>
                      </Col>
                  </Row>
                    </div>}
                  description={<div style={{ marginTop: -15 }}>{moment(post.createdAt).fromNow()}</div>}
                >
                </List.Item.Meta>
                <p style={{marginTop: -9}}>{post.text}</p>
                {post.media? <img src={post.media} style={{ width: 300}} /> : null }
            </List.Item>
        </List>
    )
}
