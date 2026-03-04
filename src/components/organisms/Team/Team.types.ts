export interface TeamMemberItem {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface TeamProps {
  members: readonly TeamMemberItem[];
  title?: string;
}
