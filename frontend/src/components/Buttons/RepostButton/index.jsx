import React, { useContext } from 'react'
import { PostContext } from "../../../context/posts";
import { RetweetOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function RepostButton({ idPost }) {
  const { toggleOpenNewPost } = useContext(PostContext);

  const handleOpenAddPost = () => {
    toggleOpenNewPost(idPost);
  }

  return (
    <div className="ui labeled" tabIndex="0" onClick={handleOpenAddPost}>
      <div style={{ marginLeft: 35, marginRight: 5 }}>
        <div className="ui basic label float"
            style={{
              height: 25, 
              borderRadius: 5, 
              top: -3, 
              border: '1px black solid', 
              marginLeft: -10, 
              marginRight: -20, 
              position: 'relative', 
              backgroundColor: 'white',
              width: 90
            }}>
          <p style={{ marginTop: -4, marginLeft: 5 }}>12 repost</p>
        </div>
      </div>

      <div style={{ position: 'absolute', marginTop: -32 }}>
        <Button shape="circle" className="likeButton"  icon={<RetweetOutlined />} />
      </div>
    </div>
  )
};
