import os
from shutil import copyfile

"""
python wip/py/student_template.py
"""

ROOT = '/Users/mpaulweeks/git/mpaulweeks/cfc2017/'
PATH_STUDENTS = ROOT + 'students'
PATH_TEMPLATE = ROOT + 'wip/templates'
BASE_URL = 'http://cfc2017.mpaulweeks.com'

def copy_file(template_path, student_name, student_path):
    with open(template_path, 'r') as f:
        content = f.read()
    content = content.replace('<student_name>', student_name)
    content = content.replace('<base_url>', BASE_URL)
    with open(student_path, "w") as f:
        f.write(content)

def run():

    students = []
    for f in os.listdir(PATH_STUDENTS):
        if not os.path.isfile(os.path.join(PATH_STUDENTS, f)):
            students.append(f)

    print (students)

    relative_paths = ['']
    while relative_paths:
        curr_path = relative_paths.pop()
        children = os.listdir(PATH_TEMPLATE + curr_path)
        for child in children:
            child_rel_path = '%s/%s' % (curr_path, child)
            child_full_path = '%s/%s' % (PATH_TEMPLATE, child_rel_path)
            if os.path.isfile(child_full_path):
                for s in students:
                    s_path = '%s/%s/%s' % (PATH_STUDENTS, s, child_rel_path)
                    copy_file(child_full_path, s, s_path)
            else:
                relative_paths.append(child_rel_path)
                for s in students:
                    s_path = '%s/%s/%s' % (PATH_STUDENTS, s, child_rel_path)
                    if not os.path.exists(s_path):
                        os.makedirs(s_path)

if __name__ == "__main__":
    run()
