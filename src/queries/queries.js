import { gql } from "apollo-boost";

const getNotes = gql`
  {
    notes {
      content
      timestamp
      id
    }
  }
`;

const addNoteMutation = gql`
  mutation($content: String!, $timestamp: String!) {
    addNote(content: $content, timestamp: $timestamp) {
      content
      timestamp
    }
  }
`;

const deleteNoteMutation = gql`
  mutation($id: ID!) {
    deleteNote(id: $id) {
      content
    }
  }
`;

export { getNotes, addNoteMutation, deleteNoteMutation };
