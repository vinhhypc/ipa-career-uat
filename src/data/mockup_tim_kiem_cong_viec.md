curl --location 'https://bizrule-uat.ipas.com.vn/public/matches/list_jds_ipag_hiring' \
--header 'Content-Type: application/json' \
--header 'Cookie: JSESSIONID=290B81FACED6A34BA34F921AF17855E2; TS016870b0=0134ade5cfffa6c6cf68c3e758d5a4c4a6e69856917e0bb18fe07c12eabec71b417f2b624f9b1dab5ef9cfb6d566765e53e6edc852ee1eeb595028e1ab551899253bece062; TS016870b0=0134ade5cfb00228980c77678055d7167facbbdd87deff3f8faff8d98b44bc11a211ca409182b6cfba4afedeff2e8d3ee101f915eca1df6b90870cb7781dcf9c192401ca8f' \
--data '{
    "domain": "BAO_HIEM",
    "businessLine": "PTI",
    "program": "PROFESSIONAL_FORCE",
    "name": "it",
    "workAddress": "01",
    "page": 1,
    "size": 20
}'

response: 
{
    "content": [
        {
            "cms_bizCode": {
                "name": "Job description",
                "code": "JD",
                "dataType": "codebook"
            },
            "updatedBy": "Role Nghiệp vụ",
            "code": "1.1.753",
            "dms_pms_template": "546110469790950302",
            "created": 1779416813375,
            "dms_pms_template_condition": "546110469790949947",
            "entityTypeName": "JD IPAG tuyển dụng",
            "entityTypeDomain": "IPAS",
            "nameLower": "it pti",
            "typeCode": "cms_ipag_hiring_jds",
            "createdBy": "Role Nghiệp vụ",
            "entityTypeCode": "cms_ipag_hiring_jds",
            "checkedBy": "Role Nghiệp vụ",
            "entityTypeSystem": "PMS",
            "name": "IT PTI",
            "modified": 1779437905282,
            "entityTypeId": 203,
            "id": "546110469790968149",
            "slug": "it-pti",
            "status": 2,
            "cms_jobInfo": {
                "fields": {
                    "cms_department": {
                        "name": "IT",
                        "code": "IT",
                        "dataType": "codebook"
                    },
                    "cms_publishDate": {
                        "unit": "Ngày",
                        "value": 1779123600000,
                        "operator": "=",
                        "dataType": "long"
                    },
                    "cms_jobLevel": {
                        "name": "Quản lý",
                        "code": "QUAN_LY",
                        "dataType": "codebook"
                    },
                    "cms_jobDescription": {
                        "fileName": "content-1779437896624.html",
                        "linkFileUrl": "https://dfile-uat-int.ipas.com.vn/public/view/2057737803630043136",
                        "sourceValueString": "{\"fileStorageId\":\"2057737803625848832\",\"fileEntryId\":\"2057737803630043136\",\"versionNo\":1,\"objectKey\":\"22052026/v1/2057737803613265920.html\",\"bucket\":\"dfile-anh.phamtuan3\",\"mimeType\":\"text/html\",\"extension\":\"html\",\"size\":3232,\"fileName\":\"content-1779437896624.html\",\"storageLocation\":\"minio\",\"createdBy\":\"anh.phamtuan3\",\"createdAt\":1779437898363,\"updatedBy\":\"anh.phamtuan3\",\"updatedAt\":1779437898363}",
                        "requestId": "59693552bfbc4d13801c0299c968be66",
                        "dataType": "d-file",
                        "fileId": "2057737803630043136"
                    },
                    "cms_recruitmentReason": {
                        "name": "Tuyển mới",
                        "code": "TUYEN_MOI",
                        "dataType": "codebook"
                    },
                    "cms_employmentType": {
                        "name": "Nhân viên chính thức",
                        "code": "NHAN_VIEN_CHINH_THUC",
                        "dataType": "codebook"
                    },
                    "cms_educationLevel": {
                        "name": "Thạc sĩ",
                        "code": "THAC_SI",
                        "dataType": "codebook"
                    },
                    "cms_minExperience": "5",
                    "cms_salaryType ": {
                        "name": "Lương thỏa thuận",
                        "code": "LUONG_THOA_THUAN",
                        "dataType": "codebook"
                    },
                    "cms_domain": {
                        "name": "Bảo hiểm",
                        "code": "BAO_HIEM",
                        "dataType": "codebook"
                    },
                    "cms_businessLine": {
                        "name": "PTI",
                        "code": "PTI",
                        "dataType": "codebook"
                    },
                    "cms_recruitmentQuantity": {
                        "value": 2,
                        "operator": "=",
                        "dataType": "int"
                    },
                    "cms_experienceType": {
                        "name": "Có kinh nghiệm",
                        "code": "CO_KN",
                        "dataType": "codebook"
                    },
                    "cms_program": {
                        "name": "Professional Force",
                        "code": "PROFESSIONAL_FORCE",
                        "dataType": "codebook"
                    },
                    "cms_recruitmentDeadline": {
                        "unit": "Ngày",
                        "value": 1782752400000,
                        "operator": "=",
                        "dataType": "long"
                    }
                }
            }
        },
        {
            "cms_bizCode": {
                "name": "Job description",
                "code": "JD",
                "dataType": "codebook"
            },
            "updatedBy": "Creator 1",
            "code": "VND-05",
            "dms_pms_template": "546110469790950302",
            "created": 1779431038972,
            "dms_pms_template_condition": "546110469790949947",
            "entityTypeName": "JD IPAG tuyển dụng",
            "entityTypeDomain": "IPAS",
            "nameLower": "chuyên viên cao cấp c&b",
            "typeCode": "cms_ipag_hiring_jds",
            "createdBy": "Creator 1",
            "entityTypeCode": "cms_ipag_hiring_jds",
            "checkedBy": "Creator 1",
            "entityTypeSystem": "PMS",
            "name": "Chuyên viên cao cấp C&B",
            "modified": 1779431038972,
            "entityTypeId": 203,
            "id": "546110469790968153",
            "slug": "chuyen-vien-cao-cap-c&b",
            "status": 2,
            "cms_jobInfo": {
                "fields": {
                    "cms_department": {
                        "name": "Nhân sự",
                        "code": "NHAN_SU",
                        "dataType": "codebook"
                    },
                    "cms_publishDate": {
                        "unit": "Ngày",
                        "value": 1779382800000,
                        "operator": "=",
                        "dataType": "long"
                    },
                    "cms_jobLevel": {
                        "name": "Nhân viên",
                        "code": "NHAN_VIEN",
                        "dataType": "codebook"
                    },
                    "cms_minSalary": "15000000",
                    "cms_jobIncludeWeekend": [
                        {
                            "name": "Thứ 7",
                            "code": "SATURDAY",
                            "dataType": "codebook"
                        },
                        {
                            "name": "Chủ nhật",
                            "code": "SUNDAY",
                            "dataType": "codebook"
                        }
                    ],
                    "cms_recruitmentReason": {
                        "name": "Tuyển mới",
                        "code": "TUYEN_MOI",
                        "dataType": "codebook"
                    },
                    "cms_jobBenefits": [
                        {
                            "name": "Bảo hiểm",
                            "code": "BAO_HIEM",
                            "dataType": "codebook"
                        },
                        {
                            "name": "Máy tính xách tay",
                            "code": "LAPTOP",
                            "dataType": "codebook"
                        },
                        {
                            "name": "Công tác phí",
                            "code": "CONG_TAC_PHI",
                            "dataType": "codebook"
                        },
                        {
                            "name": "Đào tạo",
                            "code": "DAO_TAO",
                            "dataType": "codebook"
                        }
                    ],
                    "cms_maxExperience": "15 năm",
                    "cms_employmentType": {
                        "name": "Nhân viên chính thức",
                        "code": "NHAN_VIEN_CHINH_THUC",
                        "dataType": "codebook"
                    },
                    "cms_educationLevel": {
                        "name": "Đại học",
                        "code": "DAI_HOC",
                        "dataType": "codebook"
                    },
                    "cms_minExperience": "5 năm",
                    "cms_salaryType ": {
                        "name": "Lương thỏa thuận",
                        "code": "LUONG_THOA_THUAN",
                        "dataType": "codebook"
                    },
                    "cms_workAddresses": [
                        {
                            "name": "Thành phố Hà Nội",
                            "code": "01",
                            "dataType": "codebook"
                        }
                    ],
                    "cms_domain": {
                        "name": "Human resource",
                        "code": "NHAN_SU",
                        "dataType": "codebook"
                    },
                    "cms_businessLine": {
                        "name": "IPAM",
                        "code": "IPAM",
                        "dataType": "codebook"
                    },
                    "cms_recruitmentQuantity": {
                        "value": 1,
                        "operator": "=",
                        "dataType": "int"
                    },
                    "cms_experienceType": {
                        "name": "Có kinh nghiệm",
                        "code": "CO_KN",
                        "dataType": "codebook"
                    },
                    "cms_program": {
                        "name": "Executive Serve",
                        "code": "EXECUTIVE_SERVE",
                        "dataType": "codebook"
                    },
                    "cms_recruitmentDeadline": {
                        "unit": "Ngày",
                        "value": 1782061200000,
                        "operator": "=",
                        "dataType": "long"
                    }
                }
            }
        }
    ],
    "totalElements": 2,
    "totalPages": 1,
    "size": 20,
    "number": 0
}