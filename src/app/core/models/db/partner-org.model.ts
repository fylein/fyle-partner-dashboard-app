export type PartnerOrg = {
    id: number;
    name: string;
    primary_org_id: string;
    is_org_rebranded: boolean;
    currency: string;
    cluster_domain: string;
    created_at: Date;
    updated_at: Date;
    user: number[]
};
