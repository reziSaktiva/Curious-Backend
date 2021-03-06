import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = gql`
  mutation deleteAccount($id: ID!) {
  deleteAccount(id: $id)
}
`

export const SUBSCRIBE_POST = gql`
  mutation subscribePost($id: ID! $room: String) {
    subscribePost(postId: $id room:$room){
    postId
    owner
    createdAt
    isSubscribe
  }
  }
`

export const CLEAR_ALL_NOTIF = gql`
  mutation clearNotif {
  clearAllNotif
}
`

export const CREATE_POST = gql`
  mutation createPost($text: String!, $lat: Float, $lng: Float) {
    createPost(text: $text, location: { lat: $lat, lng: $lng }) {
      id
      text
      owner
      createdAt
      repostCount
      likeCount
      commentCount
      room
      location {
        lat
        lng
      }
      likes {
        id
        owner
        createdAt
        colorCode
        displayName
        displayImage
      }
      muted {
        id
        owner
        postId
        createdAt
      }
      repost {
        id
        owner
        text
        media
        createdAt
        location {
          lat
          lng
        }
      }
      subscribe {
        postId
        owner
        createdAt
        displayName
        displayImage
        colorCode
    }
    }
  }
`;

export const CREATE_COMMENT = gql`
mutation createComment($id: ID!, $text: String!, $reply: Reply, $photo: String, $room:String) {
  createComment(id : $id, text: $text, reply: $reply, photo: $photo, room: $room) {
  id
  owner
  text
  createdAt
  colorCode
  photo
  displayName
  displayImage
  reply {
    username
    id
    }
  }
}
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!, $room: String) {
      deleteComment(postId: $postId, commentId: $commentId, room: $room) {
      id
      owner
      text
      createdAt
      colorCode
      photo
      displayName
      displayImage
      reply {
        username
        id
        }
      }
  }
`

export const READ_ALL_NOTIFICATIONS = gql`
  mutation readNotifications {
    readAllNotification{
      recipient
      sender
      read
      postId
      id
      type
      createdAt
      displayName
      displayImage
      colorCode
    }
  }
`

export const READ_NOTIFICATION = gql`
  mutation readNotification($id: ID!) {
    readNotification(id: $id){
      recipient
      sender
      read
      postId
      id
      type
      createdAt
      displayName
      displayImage
      colorCode
  }
}
`

export const DELETE_POST = gql`
  mutation deletePost($id: ID! $room: String) {
    deletePost(id: $id room: $room)
  }
`

export const CHANGE_PP = gql`
  mutation changePPUser($url: String!) {
    changePPUser(url: $url)
  }
`

export const MUTE_POST = gql`
  mutation mutePost($postId: ID! $room: String) {
    mutePost(postId:$postId room:$room){
      id
      owner
      createdAt
      postId
      mute
    }
  }
`



export const GET_MORE_POSTS = gql`
  mutation nextPosts($id: ID! $lat: Float! $lng: Float!) {
    nextPosts(id: $id, lat:$lat ,lng: $lng) {
      id
      owner
      text
      media
      createdAt
      commentCount
      repostCount
      likeCount
      location {
        lat
        lng
      }
      likes {
        id
        owner
        createdAt
        colorCode
        displayName
        displayImage
      }
      muted {
        id
        owner
        postId
        createdAt
      }
      repost {
        id
        owner
        text
        media
        createdAt
        location {
          lat
          lng
        }
      }
    }
  }
`;

export const GET_MORE_POPULAR = gql`
mutation nextPopular($id: ID! $lat: Float! $lng: Float!) {
  nextPopularPosts(id: $id, lat:$lat ,lng: $lng) {
    id
    owner
    text
    media
    createdAt
    commentCount
    likeCount
    repostCount
    location {
      lat
      lng
    }
    likes {
      id
      owner
      createdAt
      colorCode
      displayName
      displayImage
    }
    muted {
      id
      owner
      postId
      createdAt
    }
    repost {
      id
      owner
      text
      media
      createdAt
      location {
        lat
        lng
      }
    }
  }
}
`;

export const LIKE_POST = gql`
  mutation likePost($id: ID! $room:String) {
    likePost(id: $id room: $room) {
      id
      owner
      createdAt
      colorCode
      displayName
      displayImage
      isLike
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const LOGIN_USER_FACEBOOK = gql`
  mutation loginFacebook($username: String!, $token: String!) {
    loginWithFacebook(username: $username, token: $token) 
  }
`;

export const REGISTER_USER_FACEBOOK = gql`
  mutation registerUserFacebook(
    $username: String!
    $email: String!
    $imageUrl: String!
    $token: String!
    $mobileNumber: String!
    $gender: String!
    $birthday: String!
    $id: String!
  ) {
    registerUserWithFacebook(
      facebookData: {
        mobileNumber: $mobileNumber
        id: $id
        email: $email
        token: $token
        imageUrl: $imageUrl
        gender: $gender
        birthday: $birthday
        username: $username
      }
    ) 
  }
`;
export const REGISTER_USER_GOOGLE = gql`
  mutation registerUserGoogle(
    $username: String!
    $email: String!
    $imageUrl: String!
    $token: String!
    $mobileNumber: String!
    $gender: String!
    $birthday: String!
    $id: String!
  ) {
    registerUserWithGoogle(
      googleData: {
        mobileNumber: $mobileNumber
        id: $id
        email: $email
        token: $token
        imageUrl: $imageUrl
        gender: $gender
        birthday: $birthday
        username: $username
      }
    ) 
  }
`;

export const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
    $mobileNumber: String!
    $gender: String!
    $birthday: String!
  ) {
    registerUser(
      registerInput: {
        mobileNumber: $mobileNumber
        email: $email
        password: $password
        gender: $gender
        birthday: $birthday
        username: $username
      }
    )
  }
`;
