# MCP kết nối Figma

Repo này đã kèm cấu hình MCP ở mức project để AI assistant có thể gọi Figma thông qua server `mcp-figma`.

## 1) Tạo token Figma

Vào Figma → Account Settings → Personal access tokens → tạo token mới.

## 2) Lưu token cục bộ (không commit)

- Copy file `.env.local.example` thành `.env.local`.
- Điền giá trị cho `FIGMA_ACCESS_TOKEN`.

Lưu ý: `.env.local` đã được ignore trong `.gitignore`.
Nếu token từng bị dán nhầm vào file đã commit, hãy revoke/rotate token đó trong Figma và tạo token mới.
Không dán token vào chat/issue/PR; coi như secret và chỉ lưu ở máy cá nhân hoặc secret store của CI/CD.

## 3) Bật MCP trong IDE

### Cursor

Repo đã có file `.cursor/mcp.json`. Chỉ cần bật MCP trong Cursor và restart Cursor để server xuất hiện trong Agent tools.

### Claude (Claude Code / Claude Desktop)

Repo đã có file `.claude/mcp.json`. Nếu bạn dùng Claude Desktop, thông thường Claude Desktop sẽ đọc config theo user profile (Windows: `%APPDATA%\\Claude\\claude_desktop_config.json`). Bạn có thể copy nội dung từ `.claude/mcp.json` vào file đó.

## 4) Khởi tạo API key lần đầu

Vì `mcp-figma` lưu key theo user (không nằm trong repo), lần đầu bạn chạy trong AI assistant hãy yêu cầu tool set key:

"Hãy dùng mcp-figma để set Figma API key của tôi: <TOKEN>"

Sau đó có thể kiểm tra:

"Hãy dùng mcp-figma để check API key status"

## 5) Chạy thủ công (tuỳ chọn)

Bạn có thể chạy server bằng:

```bash
pnpm mcp:figma
```
