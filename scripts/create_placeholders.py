import os

projects = [
    "uiuc-dashboard", "f1-telemetry", "magelli-scout", 
    "awg-pricing", "bosch-portal", "energy-trading"
]
education = [
    "uiuc-ms", "nitc-btech"
]
personal = [
    "personal-1", "personal-2", "personal-3", "personal-4"
]

svg_template = """<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#e2e8f0" />
  <text x="50%" y="50%" font-family="sans-serif" font-size="32" font-weight="bold" fill="#64748b" text-anchor="middle" dominant-baseline="middle">{name}</text>
</svg>"""

os.makedirs("public/images/projects", exist_ok=True)
os.makedirs("public/images/education", exist_ok=True)
os.makedirs("public/images/personal", exist_ok=True)

for p in projects:
    with open(f"public/images/projects/{p}.svg", "w") as f:
        f.write(svg_template.format(name=p.replace("-", " ").title()))

for e in education:
    with open(f"public/images/education/{e}.svg", "w") as f:
        f.write(svg_template.format(name=e.replace("-", " ").title()))

for p in personal:
    with open(f"public/images/personal/{p}.svg", "w") as f:
        f.write(svg_template.format(name=p.replace("-", " ").title()))

print("Placeholders created successfully.")
