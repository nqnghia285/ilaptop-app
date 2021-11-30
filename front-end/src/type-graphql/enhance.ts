import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Person: crudResolvers.PersonCrudResolver,
  Customer: crudResolvers.CustomerCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Laptop: crudResolvers.LaptopCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  PriceMap: crudResolvers.PriceMapCrudResolver,
  Discount: crudResolvers.DiscountCrudResolver,
  Purchase: crudResolvers.PurchaseCrudResolver,
  Passage: crudResolvers.PassageCrudResolver,
  Post: crudResolvers.PostCrudResolver
};
const actionResolversMap = {
  Person: {
    person: actionResolvers.FindUniquePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    people: actionResolvers.FindManyPersonResolver,
    createPerson: actionResolvers.CreatePersonResolver,
    createManyPerson: actionResolvers.CreateManyPersonResolver,
    deletePerson: actionResolvers.DeletePersonResolver,
    updatePerson: actionResolvers.UpdatePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    upsertPerson: actionResolvers.UpsertPersonResolver,
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver
  },
  Customer: {
    customer: actionResolvers.FindUniqueCustomerResolver,
    findFirstCustomer: actionResolvers.FindFirstCustomerResolver,
    customers: actionResolvers.FindManyCustomerResolver,
    createCustomer: actionResolvers.CreateCustomerResolver,
    createManyCustomer: actionResolvers.CreateManyCustomerResolver,
    deleteCustomer: actionResolvers.DeleteCustomerResolver,
    updateCustomer: actionResolvers.UpdateCustomerResolver,
    deleteManyCustomer: actionResolvers.DeleteManyCustomerResolver,
    updateManyCustomer: actionResolvers.UpdateManyCustomerResolver,
    upsertCustomer: actionResolvers.UpsertCustomerResolver,
    aggregateCustomer: actionResolvers.AggregateCustomerResolver,
    groupByCustomer: actionResolvers.GroupByCustomerResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Laptop: {
    laptop: actionResolvers.FindUniqueLaptopResolver,
    findFirstLaptop: actionResolvers.FindFirstLaptopResolver,
    laptops: actionResolvers.FindManyLaptopResolver,
    createLaptop: actionResolvers.CreateLaptopResolver,
    createManyLaptop: actionResolvers.CreateManyLaptopResolver,
    deleteLaptop: actionResolvers.DeleteLaptopResolver,
    updateLaptop: actionResolvers.UpdateLaptopResolver,
    deleteManyLaptop: actionResolvers.DeleteManyLaptopResolver,
    updateManyLaptop: actionResolvers.UpdateManyLaptopResolver,
    upsertLaptop: actionResolvers.UpsertLaptopResolver,
    aggregateLaptop: actionResolvers.AggregateLaptopResolver,
    groupByLaptop: actionResolvers.GroupByLaptopResolver
  },
  Comment: {
    comment: actionResolvers.FindUniqueCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    createComment: actionResolvers.CreateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    deleteComment: actionResolvers.DeleteCommentResolver,
    updateComment: actionResolvers.UpdateCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    upsertComment: actionResolvers.UpsertCommentResolver,
    aggregateComment: actionResolvers.AggregateCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver
  },
  PriceMap: {
    priceMap: actionResolvers.FindUniquePriceMapResolver,
    findFirstPriceMap: actionResolvers.FindFirstPriceMapResolver,
    priceMaps: actionResolvers.FindManyPriceMapResolver,
    createPriceMap: actionResolvers.CreatePriceMapResolver,
    createManyPriceMap: actionResolvers.CreateManyPriceMapResolver,
    deletePriceMap: actionResolvers.DeletePriceMapResolver,
    updatePriceMap: actionResolvers.UpdatePriceMapResolver,
    deleteManyPriceMap: actionResolvers.DeleteManyPriceMapResolver,
    updateManyPriceMap: actionResolvers.UpdateManyPriceMapResolver,
    upsertPriceMap: actionResolvers.UpsertPriceMapResolver,
    aggregatePriceMap: actionResolvers.AggregatePriceMapResolver,
    groupByPriceMap: actionResolvers.GroupByPriceMapResolver
  },
  Discount: {
    discount: actionResolvers.FindUniqueDiscountResolver,
    findFirstDiscount: actionResolvers.FindFirstDiscountResolver,
    discounts: actionResolvers.FindManyDiscountResolver,
    createDiscount: actionResolvers.CreateDiscountResolver,
    createManyDiscount: actionResolvers.CreateManyDiscountResolver,
    deleteDiscount: actionResolvers.DeleteDiscountResolver,
    updateDiscount: actionResolvers.UpdateDiscountResolver,
    deleteManyDiscount: actionResolvers.DeleteManyDiscountResolver,
    updateManyDiscount: actionResolvers.UpdateManyDiscountResolver,
    upsertDiscount: actionResolvers.UpsertDiscountResolver,
    aggregateDiscount: actionResolvers.AggregateDiscountResolver,
    groupByDiscount: actionResolvers.GroupByDiscountResolver
  },
  Purchase: {
    purchase: actionResolvers.FindUniquePurchaseResolver,
    findFirstPurchase: actionResolvers.FindFirstPurchaseResolver,
    purchases: actionResolvers.FindManyPurchaseResolver,
    createPurchase: actionResolvers.CreatePurchaseResolver,
    createManyPurchase: actionResolvers.CreateManyPurchaseResolver,
    deletePurchase: actionResolvers.DeletePurchaseResolver,
    updatePurchase: actionResolvers.UpdatePurchaseResolver,
    deleteManyPurchase: actionResolvers.DeleteManyPurchaseResolver,
    updateManyPurchase: actionResolvers.UpdateManyPurchaseResolver,
    upsertPurchase: actionResolvers.UpsertPurchaseResolver,
    aggregatePurchase: actionResolvers.AggregatePurchaseResolver,
    groupByPurchase: actionResolvers.GroupByPurchaseResolver
  },
  Passage: {
    passage: actionResolvers.FindUniquePassageResolver,
    findFirstPassage: actionResolvers.FindFirstPassageResolver,
    passages: actionResolvers.FindManyPassageResolver,
    createPassage: actionResolvers.CreatePassageResolver,
    createManyPassage: actionResolvers.CreateManyPassageResolver,
    deletePassage: actionResolvers.DeletePassageResolver,
    updatePassage: actionResolvers.UpdatePassageResolver,
    deleteManyPassage: actionResolvers.DeleteManyPassageResolver,
    updateManyPassage: actionResolvers.UpdateManyPassageResolver,
    upsertPassage: actionResolvers.UpsertPassageResolver,
    aggregatePassage: actionResolvers.AggregatePassageResolver,
    groupByPassage: actionResolvers.GroupByPassageResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  }
};
const crudResolversInfo = {
  Person: ["person", "findFirstPerson", "people", "createPerson", "createManyPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Customer: ["customer", "findFirstCustomer", "customers", "createCustomer", "createManyCustomer", "deleteCustomer", "updateCustomer", "deleteManyCustomer", "updateManyCustomer", "upsertCustomer", "aggregateCustomer", "groupByCustomer"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Laptop: ["laptop", "findFirstLaptop", "laptops", "createLaptop", "createManyLaptop", "deleteLaptop", "updateLaptop", "deleteManyLaptop", "updateManyLaptop", "upsertLaptop", "aggregateLaptop", "groupByLaptop"],
  Comment: ["comment", "findFirstComment", "comments", "createComment", "createManyComment", "deleteComment", "updateComment", "deleteManyComment", "updateManyComment", "upsertComment", "aggregateComment", "groupByComment"],
  PriceMap: ["priceMap", "findFirstPriceMap", "priceMaps", "createPriceMap", "createManyPriceMap", "deletePriceMap", "updatePriceMap", "deleteManyPriceMap", "updateManyPriceMap", "upsertPriceMap", "aggregatePriceMap", "groupByPriceMap"],
  Discount: ["discount", "findFirstDiscount", "discounts", "createDiscount", "createManyDiscount", "deleteDiscount", "updateDiscount", "deleteManyDiscount", "updateManyDiscount", "upsertDiscount", "aggregateDiscount", "groupByDiscount"],
  Purchase: ["purchase", "findFirstPurchase", "purchases", "createPurchase", "createManyPurchase", "deletePurchase", "updatePurchase", "deleteManyPurchase", "updateManyPurchase", "upsertPurchase", "aggregatePurchase", "groupByPurchase"],
  Passage: ["passage", "findFirstPassage", "passages", "createPassage", "createManyPassage", "deletePassage", "updatePassage", "deleteManyPassage", "updateManyPassage", "upsertPassage", "aggregatePassage", "groupByPassage"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"]
};
const argsInfo = {
  FindUniquePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePersonArgs: ["data"],
  CreateManyPersonArgs: ["data", "skipDuplicates"],
  DeletePersonArgs: ["where"],
  UpdatePersonArgs: ["data", "where"],
  DeleteManyPersonArgs: ["where"],
  UpdateManyPersonArgs: ["data", "where"],
  UpsertPersonArgs: ["where", "create", "update"],
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCustomerArgs: ["where"],
  FindFirstCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustomerArgs: ["data"],
  CreateManyCustomerArgs: ["data", "skipDuplicates"],
  DeleteCustomerArgs: ["where"],
  UpdateCustomerArgs: ["data", "where"],
  DeleteManyCustomerArgs: ["where"],
  UpdateManyCustomerArgs: ["data", "where"],
  UpsertCustomerArgs: ["where", "create", "update"],
  AggregateCustomerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustomerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueLaptopArgs: ["where"],
  FindFirstLaptopArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLaptopArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateLaptopArgs: ["data"],
  CreateManyLaptopArgs: ["data", "skipDuplicates"],
  DeleteLaptopArgs: ["where"],
  UpdateLaptopArgs: ["data", "where"],
  DeleteManyLaptopArgs: ["where"],
  UpdateManyLaptopArgs: ["data", "where"],
  UpsertLaptopArgs: ["where", "create", "update"],
  AggregateLaptopArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByLaptopArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCommentArgs: ["data"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  DeleteCommentArgs: ["where"],
  UpdateCommentArgs: ["data", "where"],
  DeleteManyCommentArgs: ["where"],
  UpdateManyCommentArgs: ["data", "where"],
  UpsertCommentArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePriceMapArgs: ["where"],
  FindFirstPriceMapArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPriceMapArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePriceMapArgs: ["data"],
  CreateManyPriceMapArgs: ["data", "skipDuplicates"],
  DeletePriceMapArgs: ["where"],
  UpdatePriceMapArgs: ["data", "where"],
  DeleteManyPriceMapArgs: ["where"],
  UpdateManyPriceMapArgs: ["data", "where"],
  UpsertPriceMapArgs: ["where", "create", "update"],
  AggregatePriceMapArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPriceMapArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDiscountArgs: ["where"],
  FindFirstDiscountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDiscountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDiscountArgs: ["data"],
  CreateManyDiscountArgs: ["data", "skipDuplicates"],
  DeleteDiscountArgs: ["where"],
  UpdateDiscountArgs: ["data", "where"],
  DeleteManyDiscountArgs: ["where"],
  UpdateManyDiscountArgs: ["data", "where"],
  UpsertDiscountArgs: ["where", "create", "update"],
  AggregateDiscountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDiscountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePurchaseArgs: ["where"],
  FindFirstPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPurchaseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePurchaseArgs: ["data"],
  CreateManyPurchaseArgs: ["data", "skipDuplicates"],
  DeletePurchaseArgs: ["where"],
  UpdatePurchaseArgs: ["data", "where"],
  DeleteManyPurchaseArgs: ["where"],
  UpdateManyPurchaseArgs: ["data", "where"],
  UpsertPurchaseArgs: ["where", "create", "update"],
  AggregatePurchaseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPurchaseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePassageArgs: ["where"],
  FindFirstPassageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPassageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePassageArgs: ["data"],
  CreateManyPassageArgs: ["data", "skipDuplicates"],
  DeletePassageArgs: ["where"],
  UpdatePassageArgs: ["data", "where"],
  DeleteManyPassageArgs: ["where"],
  UpdateManyPassageArgs: ["data", "where"],
  UpsertPassageArgs: ["where", "create", "update"],
  AggregatePassageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPassageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Person: relationResolvers.PersonRelationsResolver,
  Customer: relationResolvers.CustomerRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Laptop: relationResolvers.LaptopRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  PriceMap: relationResolvers.PriceMapRelationsResolver,
  Discount: relationResolvers.DiscountRelationsResolver,
  Purchase: relationResolvers.PurchaseRelationsResolver,
  Passage: relationResolvers.PassageRelationsResolver,
  Post: relationResolvers.PostRelationsResolver
};
const relationResolversInfo = {
  Person: ["user", "customer", "comments"],
  Customer: ["profile", "purchases"],
  User: ["profile", "Post"],
  Laptop: ["priceMap", "discount", "purchases", "posts", "comments"],
  Comment: ["author", "laptop", "comment", "comments"],
  PriceMap: ["laptops"],
  Discount: ["laptops"],
  Purchase: ["customer", "laptops"],
  Passage: ["Post"],
  Post: ["passages", "laptops", "author"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Person: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  Customer: ["id", "createdAt", "updatedAt"],
  User: ["id", "role", "createdAt", "updatedAt"],
  Laptop: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  Comment: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  PriceMap: ["id", "price", "createdAt", "updatedAt"],
  Discount: ["id", "value", "createdAt", "updatedAt"],
  Purchase: ["id", "customerId", "createdAt", "updatedAt"],
  Passage: ["id", "header", "content", "postId"],
  Post: ["id", "title", "userId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregatePerson: ["_count", "_min", "_max"],
  PersonGroupBy: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateCustomer: ["_count", "_min", "_max"],
  CustomerGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "password", "role", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateLaptop: ["_count", "_avg", "_sum", "_min", "_max"],
  LaptopGroupBy: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePriceMap: ["_count", "_avg", "_sum", "_min", "_max"],
  PriceMapGroupBy: ["id", "price", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDiscount: ["_count", "_avg", "_sum", "_min", "_max"],
  DiscountGroupBy: ["id", "value", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePurchase: ["_count", "_avg", "_sum", "_min", "_max"],
  PurchaseGroupBy: ["id", "customerId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePassage: ["_count", "_avg", "_sum", "_min", "_max"],
  PassageGroupBy: ["id", "header", "content", "postId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "title", "userId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  PersonCount: ["comments"],
  PersonCountAggregate: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "_all"],
  PersonMinAggregate: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  PersonMaxAggregate: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  CustomerCount: ["purchases"],
  CustomerCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  CustomerMinAggregate: ["id", "createdAt", "updatedAt"],
  CustomerMaxAggregate: ["id", "createdAt", "updatedAt"],
  UserCount: ["Post"],
  UserCountAggregate: ["id", "password", "role", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "password", "role", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "password", "role", "createdAt", "updatedAt"],
  LaptopCount: ["purchases", "posts", "comments"],
  LaptopCountAggregate: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt", "_all"],
  LaptopAvgAggregate: ["id", "priceMapId", "discountId"],
  LaptopSumAggregate: ["id", "priceMapId", "discountId"],
  LaptopMinAggregate: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopMaxAggregate: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  CommentCount: ["comments"],
  CommentCountAggregate: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["id", "laptopId", "commentId"],
  CommentSumAggregate: ["id", "laptopId", "commentId"],
  CommentMinAggregate: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  PriceMapCount: ["laptops"],
  PriceMapCountAggregate: ["id", "price", "createdAt", "updatedAt", "_all"],
  PriceMapAvgAggregate: ["id", "price"],
  PriceMapSumAggregate: ["id", "price"],
  PriceMapMinAggregate: ["id", "price", "createdAt", "updatedAt"],
  PriceMapMaxAggregate: ["id", "price", "createdAt", "updatedAt"],
  DiscountCount: ["laptops"],
  DiscountCountAggregate: ["id", "value", "createdAt", "updatedAt", "_all"],
  DiscountAvgAggregate: ["id", "value"],
  DiscountSumAggregate: ["id", "value"],
  DiscountMinAggregate: ["id", "value", "createdAt", "updatedAt"],
  DiscountMaxAggregate: ["id", "value", "createdAt", "updatedAt"],
  PurchaseCount: ["laptops"],
  PurchaseCountAggregate: ["id", "customerId", "createdAt", "updatedAt", "_all"],
  PurchaseAvgAggregate: ["id"],
  PurchaseSumAggregate: ["id"],
  PurchaseMinAggregate: ["id", "customerId", "createdAt", "updatedAt"],
  PurchaseMaxAggregate: ["id", "customerId", "createdAt", "updatedAt"],
  PassageCountAggregate: ["id", "header", "content", "postId", "_all"],
  PassageAvgAggregate: ["id", "postId"],
  PassageSumAggregate: ["id", "postId"],
  PassageMinAggregate: ["id", "header", "content", "postId"],
  PassageMaxAggregate: ["id", "header", "content", "postId"],
  PostCount: ["passages", "laptops"],
  PostCountAggregate: ["id", "title", "userId", "createdAt", "updatedAt", "_all"],
  PostAvgAggregate: ["id"],
  PostSumAggregate: ["id"],
  PostMinAggregate: ["id", "title", "userId", "createdAt", "updatedAt"],
  PostMaxAggregate: ["id", "title", "userId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  PersonWhereInput: ["AND", "OR", "NOT", "id", "fullname", "gender", "phone", "email", "address", "user", "customer", "comments", "createdAt", "updatedAt"],
  PersonOrderByWithRelationInput: ["id", "fullname", "gender", "phone", "email", "address", "user", "customer", "comments", "createdAt", "updatedAt"],
  PersonWhereUniqueInput: ["id", "phone", "email"],
  PersonOrderByWithAggregationInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "_count", "_max", "_min"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  CustomerWhereInput: ["AND", "OR", "NOT", "id", "profile", "purchases", "createdAt", "updatedAt"],
  CustomerOrderByWithRelationInput: ["id", "profile", "purchases", "createdAt", "updatedAt"],
  CustomerWhereUniqueInput: ["id"],
  CustomerOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CustomerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "profile", "password", "role", "Post", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "profile", "password", "role", "Post", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "password", "role", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "password", "role", "createdAt", "updatedAt"],
  LaptopWhereInput: ["AND", "OR", "NOT", "id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMap", "priceMapId", "discount", "discountId", "purchases", "posts", "comments", "createdAt", "updatedAt"],
  LaptopOrderByWithRelationInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMap", "priceMapId", "discount", "discountId", "purchases", "posts", "comments", "createdAt", "updatedAt"],
  LaptopWhereUniqueInput: ["id"],
  LaptopOrderByWithAggregationInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  LaptopScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "rank", "content", "author", "authorId", "isStaff", "laptop", "laptopId", "comment", "commentId", "comments", "createdAt", "updatedAt"],
  CommentOrderByWithRelationInput: ["id", "rank", "content", "author", "authorId", "isStaff", "laptop", "laptopId", "comment", "commentId", "comments", "createdAt", "updatedAt"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  PriceMapWhereInput: ["AND", "OR", "NOT", "id", "price", "laptops", "createdAt", "updatedAt"],
  PriceMapOrderByWithRelationInput: ["id", "price", "laptops", "createdAt", "updatedAt"],
  PriceMapWhereUniqueInput: ["id", "price"],
  PriceMapOrderByWithAggregationInput: ["id", "price", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PriceMapScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "price", "createdAt", "updatedAt"],
  DiscountWhereInput: ["AND", "OR", "NOT", "id", "value", "laptops", "createdAt", "updatedAt"],
  DiscountOrderByWithRelationInput: ["id", "value", "laptops", "createdAt", "updatedAt"],
  DiscountWhereUniqueInput: ["id", "value"],
  DiscountOrderByWithAggregationInput: ["id", "value", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  DiscountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "createdAt", "updatedAt"],
  PurchaseWhereInput: ["AND", "OR", "NOT", "id", "customer", "customerId", "laptops", "createdAt", "updatedAt"],
  PurchaseOrderByWithRelationInput: ["id", "customer", "customerId", "laptops", "createdAt", "updatedAt"],
  PurchaseWhereUniqueInput: ["id"],
  PurchaseOrderByWithAggregationInput: ["id", "customerId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PurchaseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "customerId", "createdAt", "updatedAt"],
  PassageWhereInput: ["AND", "OR", "NOT", "id", "header", "content", "Post", "postId"],
  PassageOrderByWithRelationInput: ["id", "header", "content", "Post", "postId"],
  PassageWhereUniqueInput: ["id"],
  PassageOrderByWithAggregationInput: ["id", "header", "content", "postId", "_count", "_avg", "_max", "_min", "_sum"],
  PassageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "header", "content", "postId"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "title", "passages", "laptops", "author", "userId", "createdAt", "updatedAt"],
  PostOrderByWithRelationInput: ["id", "title", "passages", "laptops", "author", "userId", "createdAt", "updatedAt"],
  PostWhereUniqueInput: ["id"],
  PostOrderByWithAggregationInput: ["id", "title", "userId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "userId", "createdAt", "updatedAt"],
  PersonCreateInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "customer", "comments"],
  PersonUpdateInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "customer", "comments"],
  PersonCreateManyInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  PersonUpdateManyMutationInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  CustomerCreateInput: ["createdAt", "updatedAt", "profile", "purchases"],
  CustomerUpdateInput: ["createdAt", "updatedAt", "profile", "purchases"],
  CustomerCreateManyInput: ["id", "createdAt", "updatedAt"],
  CustomerUpdateManyMutationInput: ["createdAt", "updatedAt"],
  UserCreateInput: ["password", "role", "createdAt", "updatedAt", "profile", "Post"],
  UserUpdateInput: ["password", "role", "createdAt", "updatedAt", "profile", "Post"],
  UserCreateManyInput: ["id", "password", "role", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["password", "role", "createdAt", "updatedAt"],
  LaptopCreateInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "posts", "comments"],
  LaptopUpdateInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "posts", "comments"],
  LaptopCreateManyInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopUpdateManyMutationInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt"],
  CommentCreateInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comment", "comments"],
  CommentUpdateInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comment", "comments"],
  CommentCreateManyInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["rank", "content", "isStaff", "createdAt", "updatedAt"],
  PriceMapCreateInput: ["price", "createdAt", "updatedAt", "laptops"],
  PriceMapUpdateInput: ["price", "createdAt", "updatedAt", "laptops"],
  PriceMapCreateManyInput: ["id", "price", "createdAt", "updatedAt"],
  PriceMapUpdateManyMutationInput: ["price", "createdAt", "updatedAt"],
  DiscountCreateInput: ["value", "createdAt", "updatedAt", "laptops"],
  DiscountUpdateInput: ["value", "createdAt", "updatedAt", "laptops"],
  DiscountCreateManyInput: ["id", "value", "createdAt", "updatedAt"],
  DiscountUpdateManyMutationInput: ["value", "createdAt", "updatedAt"],
  PurchaseCreateInput: ["createdAt", "updatedAt", "customer", "laptops"],
  PurchaseUpdateInput: ["createdAt", "updatedAt", "customer", "laptops"],
  PurchaseCreateManyInput: ["id", "customerId", "createdAt", "updatedAt"],
  PurchaseUpdateManyMutationInput: ["createdAt", "updatedAt"],
  PassageCreateInput: ["header", "content", "Post"],
  PassageUpdateInput: ["header", "content", "Post"],
  PassageCreateManyInput: ["id", "header", "content", "postId"],
  PassageUpdateManyMutationInput: ["header", "content"],
  PostCreateInput: ["title", "createdAt", "updatedAt", "passages", "laptops", "author"],
  PostUpdateInput: ["title", "createdAt", "updatedAt", "passages", "laptops", "author"],
  PostCreateManyInput: ["id", "title", "userId", "createdAt", "updatedAt"],
  PostUpdateManyMutationInput: ["title", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumGenderFilter: ["equals", "in", "notIn", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  CustomerRelationFilter: ["is", "isNot"],
  CommentListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CommentOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  PersonMaxOrderByAggregateInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  PersonMinOrderByAggregateInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PersonRelationFilter: ["is", "isNot"],
  PurchaseListRelationFilter: ["every", "some", "none"],
  PurchaseOrderByRelationAggregateInput: ["_count"],
  CustomerCountOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  CustomerMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  CustomerMinOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "password", "role", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "password", "role", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "password", "role", "createdAt", "updatedAt"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumOSFilter: ["equals", "in", "notIn", "not"],
  PriceMapRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DiscountRelationFilter: ["is", "isNot"],
  LaptopCountOrderByAggregateInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopAvgOrderByAggregateInput: ["id", "priceMapId", "discountId"],
  LaptopMaxOrderByAggregateInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopMinOrderByAggregateInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopSumOrderByAggregateInput: ["id", "priceMapId", "discountId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumOSWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumRankFilter: ["equals", "in", "notIn", "not"],
  BoolFilter: ["equals", "not"],
  LaptopRelationFilter: ["is", "isNot"],
  CommentRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentAvgOrderByAggregateInput: ["id", "laptopId", "commentId"],
  CommentMaxOrderByAggregateInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentSumOrderByAggregateInput: ["id", "laptopId", "commentId"],
  EnumRankWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  LaptopListRelationFilter: ["every", "some", "none"],
  LaptopOrderByRelationAggregateInput: ["_count"],
  PriceMapCountOrderByAggregateInput: ["id", "price", "createdAt", "updatedAt"],
  PriceMapAvgOrderByAggregateInput: ["id", "price"],
  PriceMapMaxOrderByAggregateInput: ["id", "price", "createdAt", "updatedAt"],
  PriceMapMinOrderByAggregateInput: ["id", "price", "createdAt", "updatedAt"],
  PriceMapSumOrderByAggregateInput: ["id", "price"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DiscountCountOrderByAggregateInput: ["id", "value", "createdAt", "updatedAt"],
  DiscountAvgOrderByAggregateInput: ["id", "value"],
  DiscountMaxOrderByAggregateInput: ["id", "value", "createdAt", "updatedAt"],
  DiscountMinOrderByAggregateInput: ["id", "value", "createdAt", "updatedAt"],
  DiscountSumOrderByAggregateInput: ["id", "value"],
  PurchaseCountOrderByAggregateInput: ["id", "customerId", "createdAt", "updatedAt"],
  PurchaseAvgOrderByAggregateInput: ["id"],
  PurchaseMaxOrderByAggregateInput: ["id", "customerId", "createdAt", "updatedAt"],
  PurchaseMinOrderByAggregateInput: ["id", "customerId", "createdAt", "updatedAt"],
  PurchaseSumOrderByAggregateInput: ["id"],
  PostRelationFilter: ["is", "isNot"],
  PassageCountOrderByAggregateInput: ["id", "header", "content", "postId"],
  PassageAvgOrderByAggregateInput: ["id", "postId"],
  PassageMaxOrderByAggregateInput: ["id", "header", "content", "postId"],
  PassageMinOrderByAggregateInput: ["id", "header", "content", "postId"],
  PassageSumOrderByAggregateInput: ["id", "postId"],
  PassageListRelationFilter: ["every", "some", "none"],
  PassageOrderByRelationAggregateInput: ["_count"],
  PostCountOrderByAggregateInput: ["id", "title", "userId", "createdAt", "updatedAt"],
  PostAvgOrderByAggregateInput: ["id"],
  PostMaxOrderByAggregateInput: ["id", "title", "userId", "createdAt", "updatedAt"],
  PostMinOrderByAggregateInput: ["id", "title", "userId", "createdAt", "updatedAt"],
  PostSumOrderByAggregateInput: ["id"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  CustomerCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumGenderFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CustomerUpdateOneWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CommentUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateNestedOneWithoutCustomerInput: ["create", "connectOrCreate", "connect"],
  PurchaseCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  PersonUpdateOneRequiredWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PurchaseUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  PersonUpdateOneRequiredWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PriceMapCreateNestedOneWithoutLaptopsInput: ["create", "connectOrCreate", "connect"],
  DiscountCreateNestedOneWithoutLaptopsInput: ["create", "connectOrCreate", "connect"],
  PurchaseCreateNestedManyWithoutLaptopsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedManyWithoutLaptopsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutLaptopInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumOSFieldUpdateOperationsInput: ["set"],
  PriceMapUpdateOneWithoutLaptopsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  DiscountUpdateOneWithoutLaptopsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  PurchaseUpdateManyWithoutLaptopsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutLaptopsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutLaptopInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  LaptopCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutCommentInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumRankFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  PersonUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  LaptopUpdateOneRequiredWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  CommentUpdateManyWithoutCommentInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LaptopCreateNestedManyWithoutPriceMapInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  LaptopUpdateManyWithoutPriceMapInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LaptopCreateNestedManyWithoutDiscountInput: ["create", "connectOrCreate", "createMany", "connect"],
  LaptopUpdateManyWithoutDiscountInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CustomerCreateNestedOneWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  LaptopCreateNestedManyWithoutPurchasesInput: ["create", "connectOrCreate", "connect"],
  CustomerUpdateOneRequiredWithoutPurchasesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  LaptopUpdateManyWithoutPurchasesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostCreateNestedOneWithoutPassagesInput: ["create", "connectOrCreate", "connect"],
  PostUpdateOneRequiredWithoutPassagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PassageCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  LaptopCreateNestedManyWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPostInput: ["create", "connectOrCreate", "connect"],
  PassageUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  LaptopUpdateManyWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPostInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumGenderFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumGenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumOSFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumOSWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRankFilter: ["equals", "in", "notIn", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumRankWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserCreateWithoutProfileInput: ["password", "role", "createdAt", "updatedAt", "Post"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  CustomerCreateWithoutProfileInput: ["createdAt", "updatedAt", "purchases"],
  CustomerCreateOrConnectWithoutProfileInput: ["where", "create"],
  CommentCreateWithoutAuthorInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "laptop", "comment", "comments"],
  CommentCreateOrConnectWithoutAuthorInput: ["where", "create"],
  CommentCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["password", "role", "createdAt", "updatedAt", "Post"],
  CustomerUpsertWithoutProfileInput: ["update", "create"],
  CustomerUpdateWithoutProfileInput: ["createdAt", "updatedAt", "purchases"],
  CommentUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "rank", "content", "authorId", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  PersonCreateWithoutCustomerInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "comments"],
  PersonCreateOrConnectWithoutCustomerInput: ["where", "create"],
  PurchaseCreateWithoutCustomerInput: ["createdAt", "updatedAt", "laptops"],
  PurchaseCreateOrConnectWithoutCustomerInput: ["where", "create"],
  PurchaseCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  PersonUpsertWithoutCustomerInput: ["update", "create"],
  PersonUpdateWithoutCustomerInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "comments"],
  PurchaseUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  PurchaseUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  PurchaseUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  PurchaseScalarWhereInput: ["AND", "OR", "NOT", "id", "customerId", "createdAt", "updatedAt"],
  PersonCreateWithoutUserInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "customer", "comments"],
  PersonCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutAuthorInput: ["title", "createdAt", "updatedAt", "passages", "laptops"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PersonUpsertWithoutUserInput: ["update", "create"],
  PersonUpdateWithoutUserInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "customer", "comments"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "userId", "createdAt", "updatedAt"],
  PriceMapCreateWithoutLaptopsInput: ["price", "createdAt", "updatedAt"],
  PriceMapCreateOrConnectWithoutLaptopsInput: ["where", "create"],
  DiscountCreateWithoutLaptopsInput: ["value", "createdAt", "updatedAt"],
  DiscountCreateOrConnectWithoutLaptopsInput: ["where", "create"],
  PurchaseCreateWithoutLaptopsInput: ["createdAt", "updatedAt", "customer"],
  PurchaseCreateOrConnectWithoutLaptopsInput: ["where", "create"],
  PostCreateWithoutLaptopsInput: ["title", "createdAt", "updatedAt", "passages", "author"],
  PostCreateOrConnectWithoutLaptopsInput: ["where", "create"],
  CommentCreateWithoutLaptopInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "comment", "comments"],
  CommentCreateOrConnectWithoutLaptopInput: ["where", "create"],
  CommentCreateManyLaptopInputEnvelope: ["data", "skipDuplicates"],
  PriceMapUpsertWithoutLaptopsInput: ["update", "create"],
  PriceMapUpdateWithoutLaptopsInput: ["price", "createdAt", "updatedAt"],
  DiscountUpsertWithoutLaptopsInput: ["update", "create"],
  DiscountUpdateWithoutLaptopsInput: ["value", "createdAt", "updatedAt"],
  PurchaseUpsertWithWhereUniqueWithoutLaptopsInput: ["where", "update", "create"],
  PurchaseUpdateWithWhereUniqueWithoutLaptopsInput: ["where", "data"],
  PurchaseUpdateManyWithWhereWithoutLaptopsInput: ["where", "data"],
  PostUpsertWithWhereUniqueWithoutLaptopsInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutLaptopsInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutLaptopsInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutLaptopInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutLaptopInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutLaptopInput: ["where", "data"],
  PersonCreateWithoutCommentsInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "customer"],
  PersonCreateOrConnectWithoutCommentsInput: ["where", "create"],
  LaptopCreateWithoutCommentsInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "posts"],
  LaptopCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentCreateWithoutCommentsInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comment"],
  CommentCreateOrConnectWithoutCommentsInput: ["where", "create"],
  CommentCreateWithoutCommentInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comments"],
  CommentCreateOrConnectWithoutCommentInput: ["where", "create"],
  CommentCreateManyCommentInputEnvelope: ["data", "skipDuplicates"],
  PersonUpsertWithoutCommentsInput: ["update", "create"],
  PersonUpdateWithoutCommentsInput: ["id", "fullname", "gender", "phone", "email", "address", "createdAt", "updatedAt", "user", "customer"],
  LaptopUpsertWithoutCommentsInput: ["update", "create"],
  LaptopUpdateWithoutCommentsInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "posts"],
  CommentUpsertWithoutCommentsInput: ["update", "create"],
  CommentUpdateWithoutCommentsInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comment"],
  CommentUpsertWithWhereUniqueWithoutCommentInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutCommentInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutCommentInput: ["where", "data"],
  LaptopCreateWithoutPriceMapInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "discount", "purchases", "posts", "comments"],
  LaptopCreateOrConnectWithoutPriceMapInput: ["where", "create"],
  LaptopCreateManyPriceMapInputEnvelope: ["data", "skipDuplicates"],
  LaptopUpsertWithWhereUniqueWithoutPriceMapInput: ["where", "update", "create"],
  LaptopUpdateWithWhereUniqueWithoutPriceMapInput: ["where", "data"],
  LaptopUpdateManyWithWhereWithoutPriceMapInput: ["where", "data"],
  LaptopScalarWhereInput: ["AND", "OR", "NOT", "id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "discountId", "createdAt", "updatedAt"],
  LaptopCreateWithoutDiscountInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "purchases", "posts", "comments"],
  LaptopCreateOrConnectWithoutDiscountInput: ["where", "create"],
  LaptopCreateManyDiscountInputEnvelope: ["data", "skipDuplicates"],
  LaptopUpsertWithWhereUniqueWithoutDiscountInput: ["where", "update", "create"],
  LaptopUpdateWithWhereUniqueWithoutDiscountInput: ["where", "data"],
  LaptopUpdateManyWithWhereWithoutDiscountInput: ["where", "data"],
  CustomerCreateWithoutPurchasesInput: ["createdAt", "updatedAt", "profile"],
  CustomerCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  LaptopCreateWithoutPurchasesInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "posts", "comments"],
  LaptopCreateOrConnectWithoutPurchasesInput: ["where", "create"],
  CustomerUpsertWithoutPurchasesInput: ["update", "create"],
  CustomerUpdateWithoutPurchasesInput: ["createdAt", "updatedAt", "profile"],
  LaptopUpsertWithWhereUniqueWithoutPurchasesInput: ["where", "update", "create"],
  LaptopUpdateWithWhereUniqueWithoutPurchasesInput: ["where", "data"],
  LaptopUpdateManyWithWhereWithoutPurchasesInput: ["where", "data"],
  PostCreateWithoutPassagesInput: ["title", "createdAt", "updatedAt", "laptops", "author"],
  PostCreateOrConnectWithoutPassagesInput: ["where", "create"],
  PostUpsertWithoutPassagesInput: ["update", "create"],
  PostUpdateWithoutPassagesInput: ["title", "createdAt", "updatedAt", "laptops", "author"],
  PassageCreateWithoutPostInput: ["header", "content"],
  PassageCreateOrConnectWithoutPostInput: ["where", "create"],
  PassageCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  LaptopCreateWithoutPostsInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "comments"],
  LaptopCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserCreateWithoutPostInput: ["password", "role", "createdAt", "updatedAt", "profile"],
  UserCreateOrConnectWithoutPostInput: ["where", "create"],
  PassageUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  PassageUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  PassageUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  PassageScalarWhereInput: ["AND", "OR", "NOT", "id", "header", "content", "postId"],
  LaptopUpsertWithWhereUniqueWithoutPostsInput: ["where", "update", "create"],
  LaptopUpdateWithWhereUniqueWithoutPostsInput: ["where", "data"],
  LaptopUpdateManyWithWhereWithoutPostsInput: ["where", "data"],
  UserUpsertWithoutPostInput: ["update", "create"],
  UserUpdateWithoutPostInput: ["password", "role", "createdAt", "updatedAt", "profile"],
  CommentCreateManyAuthorInput: ["id", "rank", "content", "isStaff", "laptopId", "commentId", "createdAt", "updatedAt"],
  CommentUpdateWithoutAuthorInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "laptop", "comment", "comments"],
  PurchaseCreateManyCustomerInput: ["id", "createdAt", "updatedAt"],
  PurchaseUpdateWithoutCustomerInput: ["createdAt", "updatedAt", "laptops"],
  PostCreateManyAuthorInput: ["id", "title", "createdAt", "updatedAt"],
  PostUpdateWithoutAuthorInput: ["title", "createdAt", "updatedAt", "passages", "laptops"],
  CommentCreateManyLaptopInput: ["id", "rank", "content", "authorId", "isStaff", "commentId", "createdAt", "updatedAt"],
  PurchaseUpdateWithoutLaptopsInput: ["createdAt", "updatedAt", "customer"],
  PostUpdateWithoutLaptopsInput: ["title", "createdAt", "updatedAt", "passages", "author"],
  CommentUpdateWithoutLaptopInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "comment", "comments"],
  CommentCreateManyCommentInput: ["id", "rank", "content", "authorId", "isStaff", "laptopId", "createdAt", "updatedAt"],
  CommentUpdateWithoutCommentInput: ["rank", "content", "isStaff", "createdAt", "updatedAt", "author", "laptop", "comments"],
  LaptopCreateManyPriceMapInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "discountId", "createdAt", "updatedAt"],
  LaptopUpdateWithoutPriceMapInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "discount", "purchases", "posts", "comments"],
  LaptopCreateManyDiscountInput: ["id", "brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "priceMapId", "createdAt", "updatedAt"],
  LaptopUpdateWithoutDiscountInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "purchases", "posts", "comments"],
  LaptopUpdateWithoutPurchasesInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "posts", "comments"],
  PassageCreateManyPostInput: ["id", "header", "content"],
  PassageUpdateWithoutPostInput: ["header", "content"],
  LaptopUpdateWithoutPostsInput: ["brand", "model", "material", "display", "cpu", "ram", "graphicCard", "ports", "wifi", "storage", "webcam", "fans", "speakers", "keyboard", "security", "adapter", "specialFeatures", "dimensionsAndWeight", "releaseDate", "os", "createdAt", "updatedAt", "priceMap", "discount", "purchases", "comments"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

