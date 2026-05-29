#!/usr/bin/env python3
"""
简单 HTTP 服务器，用于开发测试
用法: python serve.py
"""

import http.server
import socketserver
import os
import sys

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        if self.path == '/':
            self.path = '/src/index.html'
        return super().do_GET()

try:
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔════════════════════════════════════════════════════════════════╗
║          Behavior3Editor Development Server                    ║
╚════════════════════════════════════════════════════════════════╝

🌐 Server running at: http://127.0.0.1:{PORT}
📁 Root directory: {os.getcwd()}

Press Ctrl+C to stop the server.
        """)
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n\n✋ Server stopped.")
    sys.exit(0)
except OSError as e:
    print(f"❌ Error: {e}")
    print(f"   Port {PORT} may already be in use.")
    sys.exit(1)
