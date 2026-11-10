import { AssignedRole, User } from "@/rapida/clients/protos/common_pb";
import {
  InviteUserToOrganizationRequest,
  OrganizationRole,
  ProjectRole,
  ProjectRoleAssignment,
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

  it("projects assigned roles and effective permissions", () => {
    const assignedRole = new AssignedRole();
    assignedRole.setRoledefinitionid("118");
    assignedRole.setKey("support_agent");
    assignedRole.setName("Support Agent");

    const user = new User();
    user.setOrganizationrolesList([assignedRole]);

    const organizationAccess = new OrganizationRole();
    organizationAccess.setOrganizationid("20");
    organizationAccess.setRolesList([assignedRole]);
    organizationAccess.setEffectivepermissionsList([
      "organization.members.read",
    ]);

    const projectAccess = new ProjectRole();
    projectAccess.setProjectid("30");
    projectAccess.setRolesList([assignedRole]);
    projectAccess.setEffectivepermissionsList(["project.read"]);

    expect(user.getOrganizationrolesList()[0].getName()).toBe(
      "Support Agent",
    );
    expect(organizationAccess.getEffectivepermissionsList()).toEqual([
      "organization.members.read",
    ]);
    expect(projectAccess.getEffectivepermissionsList()).toEqual([
      "project.read",
    ]);
  });
});
