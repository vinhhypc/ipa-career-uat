
curl --location 'https://bizrule-uat.ipas.com.vn/public/matches/list_posts_ipag_hiring' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=83F48CB5B5960C1313F18C02E295824D; TS016870b0=0134ade5cf06c813e5a56ce67784fdf684941fcfeae1031a3e8153e275dac5f59b7623897d5021d4d6d5cea14fb7ec83bdcce2fcef0604dacef69ab33cdec5b41d5040a830' \
--data '{
    "code": "HOAT_DONG_VA_SU_KIEN", // CHUYEN_MON_VA_TU_DUY , HOI_NHAP_VA_KHAM_PHA
    "language": "VIETNAMESE", // ENGLISH
    "page": 1,
    "size": 20
}'

response :
{
    "content": [
        {
            "cms_bizCode": {
                "name": "Bài viết",
                "code": "POSTS",
                "dataType": "codebook"
            },
            "updatedBy": "Creator 1",
            "code": "1.1.742",
            "cms_subCategory": {
                "name": "Hoạt động & Sự kiện",
                "code": "HOAT_DONG_VA_SU_KIEN",
                "dataType": "codebook"
            },
            "dms_pms_template": "546110469790967686",
            "created": 1779335198502,
            "dms_pms_template_condition": "546110469790967683",
            "entityTypeName": "Content IPAG tuyển dụng",
            "entityTypeDomain": "IPAS",
            "cms_contentInfo": {
                "fields": {
                    "cms_publishDate": {
                        "unit": "Ngày",
                        "value": 1770915600000,
                        "operator": "=",
                        "dataType": "long"
                    },
                    "cms_description": "Sự kiện Staff Meeting VNDIRECT 19 năm với chủ đề “VNDNEXT – Giấc mơ đại đồng” đã khép lại, nhưng năng lượng, cảm hứng và những khoảnh khắc thật đẹp mà chúng ta đã cùng tạo nên vẫn còn đọng lại nguyên vẹn.",
                    "cms_event": "Staff Meeting 19 Years",
                    "cms_createdAt": "Staff Meeting 19 Years",
                    "cms_language": {
                        "name": "Tiếng Việt",
                        "code": "VIETNAMESE",
                        "dataType": "codebook"
                    },
                    "cms_thumbImg": {
                        "fileName": "d44aa40f9d2a43aa72f3fb552adb773fae0a12cd.jpg",
                        "linkFileUrl": "https://dfile-uat-int.ipas.com.vn/public/view/2057295980163993602",
                        "sourceValueString": "null",
                        "requestId": "a029ed3033ef49879efeeac0d6a339ca",
                        "dataType": "d-file",
                        "fileId": "2057295980163993602"
                    },
                    "cms_content": {
                        "fileName": "content-1779335238718.html",
                        "linkFileUrl": "https://dfile-uat-int.ipas.com.vn/public/view/2057296238277267458",
                        "sourceValueString": "{\"fileStorageId\":\"2057307222073118720\",\"fileEntryId\":\"2057296238277267458\",\"versionNo\":2,\"objectKey\":\"21052026/v2/2057307220928073728.html\",\"bucket\":\"dfile-anh.phamtuan3\",\"mimeType\":\"text/html\",\"extension\":\"html\",\"size\":1676,\"fileName\":\"content-1779335238718.html\",\"storageLocation\":\"minio\",\"dimension\":\"\",\"createdBy\":\"anh.phamtuan3\",\"createdAt\":1779335239325,\"updatedBy\":\"anh.phamtuan3\",\"updatedAt\":1779335239325}",
                        "requestId": "bfc9487eb48842c9afc0344b581b25ac",
                        "dataType": "d-file",
                        "fileId": "2057296238277267458"
                    },
                    "cms_createdBy": "VNDIRECT Team"
                }
            },
            "nameLower": "những khoảnh khắc làm nên tinh thần vndnext 19",
            "cms_category": {
                "name": "Chuyện nhà IPAG",
                "code": "CHUYEN_NHA_IPAG",
                "dataType": "codebook"
            },
            "typeCode": "cms_ipag_hiring_content",
            "createdBy": "Role Nghiệp vụ",
            "entityTypeCode": "cms_ipag_hiring_content",
            "checkedBy": "Creator 1",
            "entityTypeSystem": "PMS",
            "name": "NHỮNG KHOẢNH KHẮC LÀM NÊN TINH THẦN VNDNEXT 19",
            "modified": 1779683210850,
            "entityTypeId": 206,
            "id": "546110469790967821",
            "slug": "nhung-khoanh-khac-lam-nen-tinh-than-vndnext-19",
            "status": 2
        }
    ],
    "totalElements": 1,
    "totalPages": 1,
    "size": 20,
    "number": 0
}