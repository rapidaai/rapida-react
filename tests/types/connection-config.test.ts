import { ConnectionConfig } from '@/rapida/types/connection-config';

describe('ConnectionConfig', () => {
  it('adds the selected organization to debugger authentication', () => {
    expect(
      ConnectionConfig.WithDebugger({
        authorization: 'token-1',
        userId: 'user-1',
        organizationId: 'organization-1',
        projectId: 'project-1',
      }),
    ).toMatchObject({
      authorization: 'token-1',
      'x-auth-id': 'user-1',
      'x-organization-id': 'organization-1',
      'x-project-id': 'project-1',
    });
  });

  it('omits organization metadata when no tenant is selected', () => {
    expect(
      ConnectionConfig.WithDebugger({
        authorization: 'token-1',
        userId: 'user-1',
        projectId: '',
      }),
    ).not.toHaveProperty('x-organization-id');
  });
});
