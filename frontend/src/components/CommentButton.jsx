import React from 'react'
import { MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function CommentButton({ commentCount }) {
    return (
        <div className="ui labeled" tabIndex="0">
            <div style={{ marginLeft: 35, marginRight: 5 }}>
                <div className="ui basic label float"
                    style={{ height: 25, borderRadius: 5, top: -3, border: '1px black solid', marginLeft: -10, marginRight: -20, position: 'relative', backgroundColor: 'white' }}>
                    <p style={{ marginTop: -4, marginLeft: 5 }}>{commentCount} comment</p>
                </div>
            </div>

            <div style={{ position: 'absolute', marginTop: -32 }}>
                    <Button shape="circle" className="likeButton"  icon={<MessageOutlined />} />
            </div>
        </div>
    )
}