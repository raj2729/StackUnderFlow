import { gql } from "@apollo/client";

export const projectSubmitMutation = gql`
  mutation Mutation(
    $userId: ID!
    $courseId: ID!
    $projectLink: String!
    $chapterId: ID!
  ) {
    submitProject(
      userId: $userId
      courseId: $courseId
      projectLink: $projectLink
      chapterId: $chapterId
    ) {
      projectLink
    }
  }
`;

export const checkProjectMutation = gql`
  mutation CheckProject($projectId: ID!, $projectStatus: String) {
    checkProject(projectId: $projectId, projectStatus: $projectStatus) {
      projectLink
    }
  }
`;
