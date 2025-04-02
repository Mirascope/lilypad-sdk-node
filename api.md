# Ee

## Projects

### Annotations

Types:

- <code><a href="./src/resources/ee/projects/annotations.ts">AnnotationPublic</a></code>
- <code><a href="./src/resources/ee/projects/annotations.ts">EvaluationType</a></code>
- <code><a href="./src/resources/ee/projects/annotations.ts">Label</a></code>
- <code><a href="./src/resources/ee/projects/annotations.ts">AnnotationCreateResponse</a></code>

Methods:

- <code title="post /ee/projects/{project_uuid}/annotations">client.ee.projects.annotations.<a href="./src/resources/ee/projects/annotations.ts">create</a>(projectUuid, [ ...body ]) -> AnnotationCreateResponse</code>
- <code title="patch /ee/projects/{project_uuid}/annotations/{annotation_uuid}">client.ee.projects.annotations.<a href="./src/resources/ee/projects/annotations.ts">update</a>(annotationUuid, { ...params }) -> AnnotationPublic</code>

### Functions

Types:

- <code><a href="./src/resources/ee/projects/functions.ts">FunctionGetAnnotationsResponse</a></code>
- <code><a href="./src/resources/ee/projects/functions.ts">FunctionRunPlaygroundResponse</a></code>

Methods:

- <code title="get /ee/projects/{project_uuid}/functions/{function_uuid}/annotations">client.ee.projects.functions.<a href="./src/resources/ee/projects/functions.ts">getAnnotations</a>(functionUuid, { ...params }) -> FunctionGetAnnotationsResponse</code>
- <code title="post /ee/projects/{project_uuid}/functions/{function_uuid}/playground">client.ee.projects.functions.<a href="./src/resources/ee/projects/functions.ts">runPlayground</a>(functionUuid, { ...params }) -> string</code>

### Spans

Types:

- <code><a href="./src/resources/ee/projects/spans.ts">SpanGenerateAnnotationResponse</a></code>

Methods:

- <code title="get /ee/projects/{project_uuid}/spans/{span_uuid}/generate-annotation">client.ee.projects.spans.<a href="./src/resources/ee/projects/spans.ts">generateAnnotation</a>(spanUuid, { ...params }) -> unknown</code>

## Organizations

Types:

- <code><a href="./src/resources/ee/organizations.ts">OrganizationGetLicenseResponse</a></code>

Methods:

- <code title="get /ee/organizations/license">client.ee.organizations.<a href="./src/resources/ee/organizations.ts">getLicense</a>() -> OrganizationGetLicenseResponse</code>

## UserOrganizations

Types:

- <code><a href="./src/resources/ee/user-organizations.ts">UserOrganizationTable</a></code>
- <code><a href="./src/resources/ee/user-organizations.ts">UserRole</a></code>
- <code><a href="./src/resources/ee/user-organizations.ts">UserOrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/ee/user-organizations.ts">UserOrganizationGetUserOrganizationsResponse</a></code>
- <code><a href="./src/resources/ee/user-organizations.ts">UserOrganizationGetUsersResponse</a></code>

Methods:

- <code title="post /ee/user-organizations">client.ee.userOrganizations.<a href="./src/resources/ee/user-organizations.ts">create</a>({ ...params }) -> UserOrganizationTable</code>
- <code title="patch /ee/user-organizations/{user_organization_uuid}">client.ee.userOrganizations.<a href="./src/resources/ee/user-organizations.ts">update</a>(userOrganizationUuid, { ...params }) -> UserOrganizationTable</code>
- <code title="delete /ee/user-organizations/{user_organization_uuid}">client.ee.userOrganizations.<a href="./src/resources/ee/user-organizations.ts">delete</a>(userOrganizationUuid) -> UserOrganizationDeleteResponse</code>
- <code title="get /ee/user-organizations">client.ee.userOrganizations.<a href="./src/resources/ee/user-organizations.ts">getUserOrganizations</a>() -> UserOrganizationGetUserOrganizationsResponse</code>
- <code title="get /ee/user-organizations/users">client.ee.userOrganizations.<a href="./src/resources/ee/user-organizations.ts">getUsers</a>() -> UserOrganizationGetUsersResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="post /api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">create</a>({ ...params }) -> string</code>
- <code title="get /api-keys">client.apiKeys.<a href="./src/resources/api-keys.ts">list</a>() -> APIKeyListResponse</code>
- <code title="delete /api-keys/{api_key_uuid}">client.apiKeys.<a href="./src/resources/api-keys.ts">delete</a>(apiKeyUuid) -> APIKeyDeleteResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">FunctionCreate</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectCreate</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectPublic</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectDeleteResponse</a></code>

Methods:

- <code title="post /projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectPublic</code>
- <code title="get /projects/{project_uuid}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectUuid) -> ProjectPublic</code>
- <code title="patch /projects/{project_uuid}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectUuid, { ...params }) -> ProjectPublic</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /projects/{project_uuid}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectUuid) -> ProjectDeleteResponse</code>
- <code title="post /projects/{project_uuid}/versioned-functions">client.projects.<a href="./src/resources/projects/projects.ts">createVersionedFunction</a>(projectUuid, { ...params }) -> FunctionPublic</code>

## Functions

Types:

- <code><a href="./src/resources/projects/functions/functions.ts">FunctionListResponse</a></code>
- <code><a href="./src/resources/projects/functions/functions.ts">FunctionArchiveResponse</a></code>
- <code><a href="./src/resources/projects/functions/functions.ts">FunctionArchiveByNameResponse</a></code>

Methods:

- <code title="post /projects/{project_uuid}/functions">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">create</a>(projectUuid, { ...params }) -> FunctionPublic</code>
- <code title="get /projects/{project_uuid}/functions/{function_uuid}">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">retrieve</a>(functionUuid, { ...params }) -> FunctionPublic</code>
- <code title="patch /projects/{project_uuid}/functions/{function_uuid}">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">update</a>(functionUuid, { ...params }) -> FunctionPublic</code>
- <code title="get /projects/{project_uuid}/functions">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">list</a>(projectUuid) -> FunctionListResponse</code>
- <code title="delete /projects/{project_uuid}/functions/{function_uuid}">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">archive</a>(functionUuid, { ...params }) -> FunctionArchiveResponse</code>
- <code title="delete /projects/{project_uuid}/functions/names/{function_name}">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">archiveByName</a>(functionName, { ...params }) -> FunctionArchiveByNameResponse</code>
- <code title="get /projects/{project_uuid}/functions/hash/{function_hash}">client.projects.functions.<a href="./src/resources/projects/functions/functions.ts">retrieveByHash</a>(functionHash, { ...params }) -> FunctionPublic</code>

### Name

Types:

- <code><a href="./src/resources/projects/functions/name.ts">CommonCallParams</a></code>
- <code><a href="./src/resources/projects/functions/name.ts">FunctionPublic</a></code>
- <code><a href="./src/resources/projects/functions/name.ts">NameRetrieveByNameResponse</a></code>

Methods:

- <code title="get /projects/{project_uuid}/functions/name/{function_name}">client.projects.functions.name.<a href="./src/resources/projects/functions/name.ts">retrieveByName</a>(functionName, { ...params }) -> NameRetrieveByNameResponse</code>
- <code title="get /projects/{project_uuid}/functions/name/{function_name}/version/{version_num}">client.projects.functions.name.<a href="./src/resources/projects/functions/name.ts">retrieveByVersion</a>(versionNum, { ...params }) -> FunctionPublic</code>
- <code title="get /projects/{project_uuid}/functions/name/{function_name}/environments">client.projects.functions.name.<a href="./src/resources/projects/functions/name.ts">retrieveDeployed</a>(functionName, { ...params }) -> FunctionPublic</code>

### Metadata

#### Names

Types:

- <code><a href="./src/resources/projects/functions/metadata/names.ts">NameListResponse</a></code>
- <code><a href="./src/resources/projects/functions/metadata/names.ts">NameListLatestVersionsResponse</a></code>

Methods:

- <code title="get /projects/{project_uuid}/functions/metadata/names">client.projects.functions.metadata.names.<a href="./src/resources/projects/functions/metadata/names.ts">list</a>(projectUuid) -> NameListResponse</code>
- <code title="get /projects/{project_uuid}/functions/metadata/names/versions">client.projects.functions.metadata.names.<a href="./src/resources/projects/functions/metadata/names.ts">listLatestVersions</a>(projectUuid) -> NameListLatestVersionsResponse</code>

### Spans

Types:

- <code><a href="./src/resources/projects/functions/spans.ts">AggregateMetrics</a></code>
- <code><a href="./src/resources/projects/functions/spans.ts">SpanPublic</a></code>
- <code><a href="./src/resources/projects/functions/spans.ts">TimeFrame</a></code>
- <code><a href="./src/resources/projects/functions/spans.ts">SpanListResponse</a></code>
- <code><a href="./src/resources/projects/functions/spans.ts">SpanListAggregatesResponse</a></code>

Methods:

- <code title="get /projects/{project_uuid}/functions/{function_uuid}/spans">client.projects.functions.spans.<a href="./src/resources/projects/functions/spans.ts">list</a>(functionUuid, { ...params }) -> SpanListResponse</code>
- <code title="get /projects/{project_uuid}/functions/{function_uuid}/spans/metadata">client.projects.functions.spans.<a href="./src/resources/projects/functions/spans.ts">listAggregates</a>(functionUuid, { ...params }) -> SpanListAggregatesResponse</code>

## Spans

Types:

- <code><a href="./src/resources/projects/spans.ts">SpanListAggregatesResponse</a></code>

Methods:

- <code title="get /projects/{project_uuid}/spans/metadata">client.projects.spans.<a href="./src/resources/projects/spans.ts">listAggregates</a>(projectUuid, { ...params }) -> SpanListAggregatesResponse</code>

## Traces

Types:

- <code><a href="./src/resources/projects/traces.ts">TraceCreateResponse</a></code>
- <code><a href="./src/resources/projects/traces.ts">TraceListResponse</a></code>

Methods:

- <code title="post /projects/{project_uuid}/traces">client.projects.traces.<a href="./src/resources/projects/traces.ts">create</a>(projectUuid) -> TraceCreateResponse</code>
- <code title="get /projects/{project_uuid}/traces">client.projects.traces.<a href="./src/resources/projects/traces.ts">list</a>(projectUuid) -> TraceListResponse</code>

## Environments

Types:

- <code><a href="./src/resources/projects/environments.ts">DeploymentPublic</a></code>
- <code><a href="./src/resources/projects/environments.ts">EnvironmentRetrieveDeploymentHistoryResponse</a></code>

Methods:

- <code title="post /projects/{project_uuid}/environments/{environment_uuid}/deploy">client.projects.environments.<a href="./src/resources/projects/environments.ts">deploy</a>(environmentUuid, { ...params }) -> DeploymentPublic</code>
- <code title="get /projects/{project_uuid}/environments/{environment_uuid}/deployment">client.projects.environments.<a href="./src/resources/projects/environments.ts">retrieveActiveDeployment</a>(environmentUuid, { ...params }) -> DeploymentPublic</code>
- <code title="get /projects/{project_uuid}/environments/{environment_uuid}/function">client.projects.environments.<a href="./src/resources/projects/environments.ts">retrieveActiveFunction</a>(environmentUuid, { ...params }) -> FunctionPublic</code>
- <code title="get /projects/{project_uuid}/environments/{environment_uuid}/history">client.projects.environments.<a href="./src/resources/projects/environments.ts">retrieveDeploymentHistory</a>(environmentUuid, { ...params }) -> EnvironmentRetrieveDeploymentHistoryResponse</code>

# OrganizationsInvites

Types:

- <code><a href="./src/resources/organizations-invites.ts">OrganizationInvite</a></code>

Methods:

- <code title="post /organizations-invites">client.organizationsInvites.<a href="./src/resources/organizations-invites.ts">create</a>({ ...params }) -> OrganizationInvite</code>
- <code title="get /organizations-invites/{invite_token}">client.organizationsInvites.<a href="./src/resources/organizations-invites.ts">retrieve</a>(inviteToken) -> OrganizationInvite</code>

# Spans

Types:

- <code><a href="./src/resources/spans.ts">SpanMoreDetails</a></code>

Methods:

- <code title="get /spans/{span_uuid}">client.spans.<a href="./src/resources/spans.ts">retrieve</a>(spanUuid) -> SpanMoreDetails</code>

# Auth

## GitHub

Types:

- <code><a href="./src/resources/auth/github.ts">UserPublic</a></code>

Methods:

- <code title="get /auth/github/callback">client.auth.github.<a href="./src/resources/auth/github.ts">callback</a>({ ...params }) -> UserPublic</code>

## Google

Methods:

- <code title="get /auth/google/callback">client.auth.google.<a href="./src/resources/auth/google.ts">callback</a>({ ...params }) -> UserPublic</code>

# Users

Methods:

- <code title="put /users/{activeOrganizationUuid}">client.users.<a href="./src/resources/users.ts">updateActiveOrganization</a>(activeOrganizationUuid) -> UserPublic</code>
- <code title="patch /users">client.users.<a href="./src/resources/users.ts">updateKeys</a>({ ...params }) -> UserPublic</code>

# CurrentUser

Methods:

- <code title="get /current-user">client.currentUser.<a href="./src/resources/current-user.ts">retrieve</a>() -> UserPublic</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">OrganizationPublic</a></code>

Methods:

- <code title="patch /organizations">client.organizations.<a href="./src/resources/organizations.ts">update</a>({ ...params }) -> OrganizationPublic</code>

# ExternalAPIKeys

Types:

- <code><a href="./src/resources/external-api-keys.ts">ExternalAPIKeyPublic</a></code>
- <code><a href="./src/resources/external-api-keys.ts">ExternalAPIKeyListResponse</a></code>
- <code><a href="./src/resources/external-api-keys.ts">ExternalAPIKeyDeleteResponse</a></code>

Methods:

- <code title="post /external-api-keys">client.externalAPIKeys.<a href="./src/resources/external-api-keys.ts">create</a>({ ...params }) -> ExternalAPIKeyPublic</code>
- <code title="get /external-api-keys/{service_name}">client.externalAPIKeys.<a href="./src/resources/external-api-keys.ts">retrieve</a>(serviceName) -> ExternalAPIKeyPublic</code>
- <code title="get /external-api-keys">client.externalAPIKeys.<a href="./src/resources/external-api-keys.ts">list</a>() -> ExternalAPIKeyListResponse</code>
- <code title="delete /external-api-keys/{service_name}">client.externalAPIKeys.<a href="./src/resources/external-api-keys.ts">delete</a>(serviceName) -> ExternalAPIKeyDeleteResponse</code>

# Environments

Types:

- <code><a href="./src/resources/environments.ts">EnvironmentPublic</a></code>
- <code><a href="./src/resources/environments.ts">EnvironmentListResponse</a></code>
- <code><a href="./src/resources/environments.ts">EnvironmentDeleteResponse</a></code>

Methods:

- <code title="post /environments">client.environments.<a href="./src/resources/environments.ts">create</a>({ ...params }) -> EnvironmentPublic</code>
- <code title="get /environments/{environment_uuid}">client.environments.<a href="./src/resources/environments.ts">retrieve</a>(environmentUuid) -> EnvironmentPublic</code>
- <code title="get /environments">client.environments.<a href="./src/resources/environments.ts">list</a>() -> EnvironmentListResponse</code>
- <code title="delete /environments/{environment_uuid}">client.environments.<a href="./src/resources/environments.ts">delete</a>(environmentUuid) -> EnvironmentDeleteResponse</code>

# Settings

Types:

- <code><a href="./src/resources/settings.ts">SettingRetrieveResponse</a></code>

Methods:

- <code title="get /settings">client.settings.<a href="./src/resources/settings.ts">retrieve</a>() -> SettingRetrieveResponse</code>
