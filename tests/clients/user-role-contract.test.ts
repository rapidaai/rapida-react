import {
  Authentication,
  Organization,
  Permission,
  Project,
  Role,
  User,
} from "@/rapida/clients/protos/authentication_pb";
import {
  AuthenticateResponse,
  InviteUserToOrganizationRequest,
  ProjectRoleAssignment,
  Token,
  UpdateUserOrganizationRoleRequest,
} from "@/rapida/clients/protos/web-api_pb";

describe("user role contract", () => {
  it("exposes string-safe role IDs for invitation and replacement", () => {
    const projectAssignment = new ProjectRoleAssignment();
    projectAssignment.setProjectid("9007199254740993");
    projectAssignment.setRoledefinitionidsList(["109", "110"]);

    const invitation = new InviteUserToOrganizationRequest();
    invitation.setEmail("member@example.com");
    invitation.setOrganizationroledefinitionidsList(["102", "108"]);
    invitation.setProjectrolesList([projectAssignment]);

    const replacement = new UpdateUserOrganizationRoleRequest();
    replacement.setUserid("9007199254740995");
    replacement.setRoledefinitionidsList(["102", "108"]);

    expect(invitation.getOrganizationroledefinitionidsList()).toEqual([
      "102",
      "108",
    ]);
    expect(
      invitation.getProjectrolesList()[0].getRoledefinitionidsList(),
    ).toEqual(["109", "110"]);
    expect(replacement.getRoledefinitionidsList()).toEqual(["102", "108"]);
    expect(
      (invitation as unknown as { setOrganizationrole?: unknown })
        .setOrganizationrole,
    ).toBeUndefined();
    expect(
      (projectAssignment as unknown as { setProjectrole?: unknown })
        .setProjectrole,
    ).toBeUndefined();
  });

  it("keeps permissions on assigned roles in the authentication graph", () => {
    const permission = new Permission();
    permission.setId("501");
    permission.setKey("organization.members.read");
    permission.setScope("ORGANIZATION");
    permission.setName("Read members");

    const role = new Role();
    role.setId("118");
    role.setKey("support_agent");
    role.setName("Support Agent");
    role.setScope("ORGANIZATION");
    role.setSubject("USER");
    role.setDefinitiontype("CUSTOM");
    role.setPermissionsList([permission]);

    const project = new Project();
    project.setId("30");
    project.setName("Console");

    const organization = new Organization();
    organization.setId("20");
    organization.setName("Rapida");
    organization.setRolesList([role]);
    organization.setProjectsList([project]);

    const user = new User();
    user.setId("42");
    user.setName("Ada");
    user.setEmail("ada@example.com");
    user.setStatus("ACTIVE");

    const authentication = new Authentication();
    authentication.setUser(user);
    authentication.setOrganizationsList([organization]);

    expect(
      authentication
        .getOrganizationsList()[0]
        .getRolesList()[0]
        .getPermissionsList()[0]
        .getKey(),
    ).toBe("organization.members.read");
    expect(
      authentication.getOrganizationsList()[0].getProjectsList()[0].getId(),
    ).toBe("30");
  });

  it("returns authentication and token without a session wrapper", () => {
    const authentication = new Authentication();
    const token = new Token();
    token.setToken("credential");

    const response = new AuthenticateResponse();
    response.setAuthentication(authentication);
    response.setToken(token);

    expect(response.getAuthentication()).toBe(authentication);
    expect(response.getToken()).toBe(token);
    expect(
      (response as unknown as { getSession?: unknown }).getSession,
    ).toBeUndefined();
  });
});
