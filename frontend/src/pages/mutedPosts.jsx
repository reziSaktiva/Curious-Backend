import React, { useContext, useEffect, useRef } from 'react'

import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../GraphQL/Queries'
import { PostContext } from '../context/posts'

import InfiniteScroll from '../components/InfiniteScroll'
import PostCard from '../components/PostCard'
import { AuthContext } from '../context/auth'
import NavBar from '../components/NavBar'


function MutedPost() {
    const { data, loading: loadingPosts } = useQuery(GET_POSTS);
    const _isMounted = useRef(false);

    const { posts, setPosts, loadingData, loading } = useContext(PostContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!_isMounted.current) { // check if doesn't fetch data
            if (!data) {
                loadingData();

                return;
            }

            setPosts(data.getPosts)
            
            // set did mount react
            _isMounted.current = true;

            return;
        }
    }, [data, _isMounted])

    return (
        <div>
            <NavBar />
            {user ? (<div>
                {!posts ? null
                    : posts.map((post, key) => {
                        return (
                            user && post.muted.find((mute) => mute.owner === user.username) ? (
                                <div key={`posts${post.id} ${key}`}>
                                    {console.log(post)}
                                <PostCard post={post} loading={loading} />
                            </div>
                            ) : null
                        )
                    })}
            </div>) : null}
        </div>
    );
}

export default MutedPost