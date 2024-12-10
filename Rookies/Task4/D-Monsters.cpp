#include <iostream>
#include<queue>
#include<vector>
#include<string>
#include<algorithm>
#include<map>
#include<climits>

using namespace std;
using ll = long long;

int n,m;
vector<pair<int,int>> monster;
vector<vector<int>>t;
map<pair<int,int>,pair<int,int>> exitMap;
pair<int,int> start, dest;
vector <pair<int,int>> moves={{0,1}, {0,-1},{1,0},{-1,0}};

bool bound( int x,int y, int timer)
{
    return(x>=0 && y>=0 && x<n &&y<m && t[x][y]> timer);
}

bool escape(int x,int y, int timer){
    return bound(x,y,timer)&&(x==0 || y==0|| x==n-1 || y==m-1);
}

bool bfs()
{
    queue<pair<pair<int,int>,int>> q;
    q.push({start,0});
    exitMap[start]={-1,-1};


    while(!q.empty())
    {
       int curr_x= q.front().first.first;
       int curr_y= q.front().first.second;
       int timer=q.front().second;
       ++timer;
       q.pop();

       for(auto move1 : moves){
        int x2 =curr_x+move1.first;
        int y2= curr_y+ move1.second;

        if(escape(x2,y2,timer)){
            exitMap[{x2,y2}]={curr_x,curr_y};
            dest = {x2,y2};
            return true;
        }
         if(bound(x2, y2, timer)) {
        exitMap[{x2,y2}]={curr_x,curr_y};
        t[x2][y2]= timer;
        q.push({{x2,y2},timer});
         }
       }

    }

  return false;
}


void monsterPath()
{

    queue<pair<pair<int,int>,int>> q;

    for(auto m : monster){
        q.push({m,0});
    }

    while(!q.empty())
    {
       int curr_x= q.front().first.first;
       int curr_y= q.front().first.second;
       int timer=q.front().second;
       ++timer;
       q.pop();

       for(auto move1 : moves){
        int x2 =curr_x+move1.first;
        int y2= curr_y+ move1.second;

        if(x2>=0 && x2< n&& y2>=0 && y2<m && t[x2][y2]> timer){
        t[x2][y2]= timer;
        q.push({{x2,y2},timer});
       }

    }
    }


}




int main()
{
    cin>>n>>m;

    t.assign(n, vector<int>(m, INT_MAX));


    for (int i=0; i< n;i++) {
        for (int j= 0; j< m;j++) {
            char c;
            cin >> c;
            if (c == '#') {
                t[i][j] = 0;
            } else if (c == 'M') {
                monster.push_back({i, j});
                t[i][j] = 0;
            } else if (c == 'A') {
                start = {i, j};
                t[i][j] = 0;
            }
        }
    }

    if (start.first== 0 || start.second==0 || start.first== n - 1 || start.second== m - 1) {
        cout<<"YES"<<endl;
        cout << 0 << endl;
        return 0;
    }



    monsterPath();
    if(!bfs()){
        cout <<"NO"<<endl;
        return 0;
    }

    pair<int,int> current= dest;
    vector<char> path;

    while(current != start){
        pair<int,int> prev =exitMap[current];

        if(current.first< prev.first){
            path.push_back('U');}
        if(current.second> prev.second){
            path.push_back('R');}
        if(current.first > prev.first){
            path.push_back('D');}
        if(current.second < prev.second){
            path.push_back('L');
        }

        current=prev;

        }

        reverse(path.begin(),path.end());
        cout<<"YES"<<endl;
        cout<<path.size()<<endl;
        for(char c :path)cout<<c;




    return 0;
}


