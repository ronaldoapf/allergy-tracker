import { api } from '..'

const prefix = '/user'

export interface Image {
  mime: string
  data: string
}

export interface UserUpdateType {
  name: string
  city: string
  email: string
  country: string
  imageDTO: Image
}

export interface FoodGroupProps {
  foodGroupId: number
  name: string
}

export interface AllergyProps {
  allergyId: number
  level: string
  foodGroup: FoodGroupProps
}

export interface AvaliationProps {
  avaliationId: number
  comment: string
  level: number
}
;[]

export interface FoodProps {
  bardcodeId: number
  name: string
  image: string
  foodGroup: FoodGroupProps
  avaliation: AvaliationProps
}

export interface BadgesTypes {
  badgeTypeId: number
  name: string
  image: string
}

export interface BadgesProps {
  badgesId: number
  badgeType: BadgesTypes
}

export interface GetUserResponse {
  userId: number
  name: string
  email: string
  country: string
  city: string
  birthDate: string
  status: boolean
  points: number
  image: string
  food: FoodProps
  allergy: AllergyProps
  avaliation: AvaliationProps
  badges: BadgesProps
  enabled: boolean
  authorities: null
  username: string
  accountNonLocked: boolean
  credentialsNonExpired: boolean
  accountNonExpired: boolean
}

export const UserApi = {
  async getUser(): Promise<GetUserResponse> {
    const { data } = await api.get(`${prefix}`)
    return data
  },
  async updateUser(payload: UserUpdateType): Promise<void> {
    const { data } = api.put('')
  },
}
