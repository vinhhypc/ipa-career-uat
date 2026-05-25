import type { ChuyenNhaIpagCategoryKey } from '@/components/life-at-ipag/ChuyenNhaIpagData';

export interface ApiPost {
  id: string;
  code: string;
  slug: string;
  name: string;
  nameLower: string;
  cms_subCategory?: {
    name: string;
    code: string;
  };
  cms_contentInfo?: {
    fields?: {
      cms_publishDate?: {
        value: number;
      };
      cms_description?: string;
      cms_createdBy?: string;
      cms_thumbImg?: {
        linkFileUrl?: string;
      };
    };
  };
  created?: number;
  modified?: number;
}

export interface ApiResponse {
  content: ApiPost[] | null;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number?: number;
}

export interface FetchPostsParams {
  page: number;
  category: ChuyenNhaIpagCategoryKey;
  pageSize?: number;
}

export interface FetchPostsResult {
  posts: ApiPost[];
  totalPages: number;
  totalElements: number;
}
