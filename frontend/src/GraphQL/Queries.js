import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPostNearby($lat: Float, $lng: Float, $range: Float) {
    getPosts(lat: $lat, lng: $lng, range: $range) {
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

export const GET_ROOM_POSTS = gql`
  query getPosts($room: String!) {
    getRoomPosts(room:$room){
      id
      owner
      text
      media
      createdAt
      commentCount
      likeCount
      repostCount
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
`

export const GET_POPULAR_POSTS = gql`
  query getPosts($lat: Float, $lng: Float $range: Float) {
    getPopularPosts(lat: $lat, lng: $lng range: $range) {
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

export const GET_MUTED_POSTS = gql`
query {
  mutedPosts {
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

export const GET_SUBSCRIBED_POSTS = gql`
query {
  getSubscribePosts {
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

export const GET_PROFILE_POSTS = gql`
  query {
    getProfilePosts {
      id
      owner
      text
      media
      createdAt
      commentCount
      likeCount
      repostCount
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
    }
  }
`;
export const GET_PROFILE_LIKED_POSTS = gql`
query{
  getProfileLikedPost{
      id
      owner
      text
      media
      createdAt
      commentCount
      likeCount
      repostCount
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
      comments{
          id
          createdAt
          owner
          text
          displayName
          displayImage
          photoProfile
          colorCode
          }
      }
  }
`;

export const GET_POST = gql`
query getPost($id: ID! $room: String){
  getPost(id: $id, room: $room) {
    id
    createdAt
    owner
    media
    commentCount
    likeCount
    repostCount
    room
    text
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
    comments {
      id
      createdAt
      owner
      text
      displayName
      displayImage  
      photoProfile
      colorCode
      reply {
        id
        username
      }
      replyList {
        id
        createdAt
        owner
        text
        displayName
        displayImage
        photoProfile
        colorCode
      }
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
    hastags
    # notifications {
    #   recipient
    #   sender
    #   read
    #   postId
    #   id
    #   type
    #   createdAt
    #   displayName
    #   displayImage
    #   colorCode
    # }
  }
}
`;
export const GET_POSTS_BASED_ON_NEAREST_LOC = gql`
  query GetNearby($lat: String, $lng: String) {
    getPostBasedOnNearestLoc(lat: $lat, lng:$lng) {
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
`

export const GET_USER_DATA = gql`
  query {
    getUserData {
      user {
        id
        username
        email
        mobileNumber
        gender
        birthday
        createdAt
        profilePicture
      }
      notifications {
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
      liked {
        id
        owner
        createdAt
        displayName
        displayImage
        colorCode
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $text: String
    $media: [String]
    $location: Location!
    $repost: String
    $roomRepost: String
    $room: String
  ) {
    createPost(
    text: $text
    media: $media
    location: $location
    repost: {
      repost: $repost
      room: $roomRepost
    }
    room: $room
  )
    {
      id
      owner
      text
      media
      createdAt
      room
      location {
        lat
        lng
      }
      commentCount
      likeCount
      repostCount
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
      comments {
        id
        createdAt
        owner
        text
        displayName
        photoProfile
        colorCode
      }
    }
  }
`

export const GET_VISITED = gql`
  query GetVisited {
    getVisited {
      administrative_area_level_1
      administrative_area_level_2
      administrative_area_level_3
      administrative_area_level_4
      country
      location {
        lat
        lng
      }
    }
  }
`;
