import { ClientResponse } from "../../models/home/client.model";
import { Paginator } from "../../models/misc/paginator.model";

export const paginationProperties: Paginator = {
    limit: 50,
    offset: 0
};

export const clientOrgResponse: ClientResponse = {
    count: 50,
    data: [
        {
            approval_pending_reports_count: 1,
            billed_users_count: 234,
            created_at: new Date(),
            currency: 'USD',
            domain: 'fyle.in',
            enabled_users_count: 234,
            id: 'org234234',
            incomplete_expenses_count: 23,
            is_verified: true,
            logo_file: {
                content_type: 'image/png',
                download_url: 'https://fyle-storage-mumbai-3.s3.amazonaws.com/2020-09-02/orNoatdUnm1w/receipts/fi',
                id: 'fi5oyRjAKjTT',
                name: 'branding_icon.png',
                upload_url: 'https://fyle-storage-mumbai-3.s3.amazonaws.com/2020-09-02/orNoatdUnm1w/receipts/fi'
            },
            logo_file_id: 'fi5oyRjAKjTT',
            name: 'Fyle for Testing',
            pending_reimbursement_amount: 234,
            pending_users_count: 432,
            updated_at: new Date()
        }
    ]
};

export const clientOrgResponseWithoutLogo: ClientResponse = {
    count: 50,
    data: [
        {
            approval_pending_reports_count: 21,
            billed_users_count: 24,
            created_at: new Date(),
            currency: 'EUR',
            domain: 'fylehq.com',
            enabled_users_count: 1234,
            id: 'orkjasd',
            incomplete_expenses_count: 213,
            is_verified: true,
            logo_file: null,
            logo_file_id: null,
            name: 'Fyle for Logo',
            pending_reimbursement_amount: 2234,
            pending_users_count: 4322,
            updated_at: new Date()
        }
    ]
};
