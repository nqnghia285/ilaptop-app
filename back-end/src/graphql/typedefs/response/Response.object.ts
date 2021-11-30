import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Response {
	@Field(() => Boolean)
	isSuccess: boolean

	@Field()
	message: string
}
