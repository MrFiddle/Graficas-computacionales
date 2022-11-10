#include <GL/glut.h>
#include <iostream>
#include <list>
#include <vector>

using namespace std;
void init (void)
{
    glClearColor (0.217, 0.231, 0.255, 0.0); 
    glMatrixMode (GL_PROJECTION);        
    gluOrtho2D (0.0, 400.0, 0.0, 400.0);
}

void line(void) {
    
    // list<int> p1{1, 2};
    // list<int> p2{100, 200};
    // list<list<int>> coordinates{p1, p2};

    vector<pair<int, int>> coordinates = 
                                        {{1, 2}, {100, 20}, 
                                        {10, 200}, {50, 10}, 
                                        {300, 300}, {10, 10},
                                        {200, 300}, {250, 50},
                                        {350, 350}, {100, 300}};

    glClear (GL_COLOR_BUFFER_BIT);
    glColor3f (1, 1, 1);    

    glBegin(GL_LINES);

    for (int i = 0; i < coordinates.size(); i++) {
        glVertex2i(coordinates[i].first, coordinates[i].second);
    }

    glEnd();
    glFlush(); 

}

int main (int argc, char** argv)
{
    glutInit (&argc, argv); 
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);  .
    glutInitWindowPosition (50, 100);  
    glutInitWindowSize (400, 400);
    glutCreateWindow ("An Example OpenGL Program");
    init();
    glutDisplayFunc (line);
    glutMainLoop (); 
    return 0;
}

// Juan Pablo Perez Duran - A01639947