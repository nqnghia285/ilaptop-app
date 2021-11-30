import { applyArgsTypesEnhanceMap, ArgsTypesEnhanceMap } from '@generated/type-graphql'
import { Allow, ValidateNested } from 'class-validator'

export function configArgs() {
   const argsTypesEnhanceMap: ArgsTypesEnhanceMap = {
      AggregateCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregateCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregateDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregateLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregatePassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregatePersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregatePostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregatePriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregatePurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      AggregateUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateManyUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreatePassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreatePersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreatePostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreatePriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreatePurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      CreateUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteManyUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeletePassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeletePersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeletePostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeletePriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeletePurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      DeleteUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindFirstUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindManyUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniqueCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniqueCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniqueDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniqueLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniquePassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniquePersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniquePostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniquePriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniquePurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      FindUniqueUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      GroupByUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateManyUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdatePassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdatePersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdatePostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdatePriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdatePurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpdateUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertCommentArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertCustomerArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertDiscountArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertLaptopArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertPassageArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertPersonArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertPostArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertPriceMapArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertPurchaseArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
      UpsertUserArgs: {
         fields: {
            _all: [Allow(), ValidateNested()],
         },
      },
   }

   applyArgsTypesEnhanceMap(argsTypesEnhanceMap)
}
