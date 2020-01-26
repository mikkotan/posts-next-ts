export type TPost = {
  title: string
  description: string
  id: string
  postType: string
  link: string
  createdAt: string
}

export type FormValues = {
  title: string
  description: string
  link: string
  postType?: string
};
