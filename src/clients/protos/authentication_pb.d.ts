// package: authentication
// file: authentication.proto

import * as jspb from "google-protobuf";

export class Identity extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getId(): string;
  setId(value: string): void;

  getIssuer(): string;
  setIssuer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identity.AsObject;
  static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identity;
  static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
}

export namespace Identity {
  export type AsObject = {
    type: string,
    id: string,
    issuer: string,
  }
}

export class ServiceActor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIssuer(): string;
  setIssuer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceActor.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceActor): ServiceActor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceActor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceActor;
  static deserializeBinaryFromReader(message: ServiceActor, reader: jspb.BinaryReader): ServiceActor;
}

export namespace ServiceActor {
  export type AsObject = {
    id: string,
    issuer: string,
  }
}

export class Tenant extends jspb.Message {
  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tenant.AsObject;
  static toObject(includeInstance: boolean, msg: Tenant): Tenant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tenant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tenant;
  static deserializeBinaryFromReader(message: Tenant, reader: jspb.BinaryReader): Tenant;
}

export namespace Tenant {
  export type AsObject = {
    organizationid: string,
    projectid: string,
  }
}

export class ProofReference extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofReference.AsObject;
  static toObject(includeInstance: boolean, msg: ProofReference): ProofReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofReference;
  static deserializeBinaryFromReader(message: ProofReference, reader: jspb.BinaryReader): ProofReference;
}

export namespace ProofReference {
  export type AsObject = {
    type: string,
    value: string,
  }
}

export class Proof extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): void;

  getAudience(): string;
  setAudience(value: string): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): ProofReference | undefined;
  setReference(value?: ProofReference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof.AsObject;
  static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof;
  static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
  export type AsObject = {
    method: string,
    audience: string,
    reference?: ProofReference.AsObject,
  }
}

export class Principal extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): Identity | undefined;
  setSubject(value?: Identity): void;

  hasActor(): boolean;
  clearActor(): void;
  getActor(): ServiceActor | undefined;
  setActor(value?: ServiceActor): void;

  hasSelectedtenant(): boolean;
  clearSelectedtenant(): void;
  getSelectedtenant(): Tenant | undefined;
  setSelectedtenant(value?: Tenant): void;

  hasProof(): boolean;
  clearProof(): void;
  getProof(): Proof | undefined;
  setProof(value?: Proof): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Principal.AsObject;
  static toObject(includeInstance: boolean, msg: Principal): Principal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Principal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Principal;
  static deserializeBinaryFromReader(message: Principal, reader: jspb.BinaryReader): Principal;
}

export namespace Principal {
  export type AsObject = {
    subject?: Identity.AsObject,
    actor?: ServiceActor.AsObject,
    selectedtenant?: Tenant.AsObject,
    proof?: Proof.AsObject,
  }
}

export class Permission extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    id: string,
    key: string,
    scope: string,
    name: string,
    description: string,
  }
}

export class Role extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getScope(): string;
  setScope(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getDefinitiontype(): string;
  setDefinitiontype(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    id: string,
    key: string,
    name: string,
    description: string,
    scope: string,
    subject: string,
    definitiontype: string,
    permissionsList: Array<Permission.AsObject>,
  }
}

export class BillingPlanQuota extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getResourcetype(): string;
  setResourcetype(value: string): void;

  getQuotalimit(): number;
  setQuotalimit(value: number): void;

  getUnit(): string;
  setUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlanQuota.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlanQuota): BillingPlanQuota.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlanQuota, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlanQuota;
  static deserializeBinaryFromReader(message: BillingPlanQuota, reader: jspb.BinaryReader): BillingPlanQuota;
}

export namespace BillingPlanQuota {
  export type AsObject = {
    id: string,
    resourcetype: string,
    quotalimit: number,
    unit: string,
  }
}

export class BillingPlan extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsdefault(): boolean;
  setIsdefault(value: boolean): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getSortorder(): number;
  setSortorder(value: number): void;

  getPricemonthly(): number;
  setPricemonthly(value: number): void;

  getPriceyearly(): number;
  setPriceyearly(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getStripeurl(): string;
  setStripeurl(value: string): void;

  clearQuotasList(): void;
  getQuotasList(): Array<BillingPlanQuota>;
  setQuotasList(value: Array<BillingPlanQuota>): void;
  addQuotas(value?: BillingPlanQuota, index?: number): BillingPlanQuota;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: BillingPlan): BillingPlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingPlan;
  static deserializeBinaryFromReader(message: BillingPlan, reader: jspb.BinaryReader): BillingPlan;
}

export namespace BillingPlan {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
    description: string,
    isdefault: boolean,
    isactive: boolean,
    sortorder: number,
    pricemonthly: number,
    priceyearly: number,
    currency: string,
    stripeurl: string,
    quotasList: Array<BillingPlanQuota.AsObject>,
  }
}

export class Project extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: string,
    name: string,
    rolesList: Array<Role.AsObject>,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  hasBillingplan(): boolean;
  clearBillingplan(): void;
  getBillingplan(): BillingPlan | undefined;
  setBillingplan(value?: BillingPlan): void;

  clearProjectsList(): void;
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    rolesList: Array<Role.AsObject>,
    billingplan?: BillingPlan.AsObject,
    projectsList: Array<Project.AsObject>,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    status: string,
  }
}

export class Authentication extends jspb.Message {
  hasPrincipal(): boolean;
  clearPrincipal(): void;
  getPrincipal(): Principal | undefined;
  setPrincipal(value?: Principal): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  clearOrganizationsList(): void;
  getOrganizationsList(): Array<Organization>;
  setOrganizationsList(value: Array<Organization>): void;
  addOrganizations(value?: Organization, index?: number): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authentication.AsObject;
  static toObject(includeInstance: boolean, msg: Authentication): Authentication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authentication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authentication;
  static deserializeBinaryFromReader(message: Authentication, reader: jspb.BinaryReader): Authentication;
}

export namespace Authentication {
  export type AsObject = {
    principal?: Principal.AsObject,
    user?: User.AsObject,
    organizationsList: Array<Organization.AsObject>,
  }
}

