#include <iostream>
#include <vector>
using namespace std;

bool in_grid(int n,int m, int r, int c, vector<vector<int>> &grid, vector<vector<int>> &vis){
    return(r>=0&& c>=0 && r<n&& c<m&& grid[r][c]!=0 && !vis[r][c] );
}

int dfs(int n,int m, int r, int c, vector<vector<int>> &grid, vector<vector<int>> &vis){
    static int r1[4]={-1,1,0,0};
    static int c1[4]={0,0,-1,1};

    int sum=0;
    vis[r][c]=1;

    for(int p=0; p<4 ;p++){
        int r2= r +r1[p];
        int c2 =c+c1[p];

        if(in_grid(n,m,r2,c2,grid,vis)){
            sum += grid[r2][c2] + dfs(n,m,r2,c2,grid,vis);
        }
    }

    return sum;
}

int main() {

    int t;
    cin>>t;
    while(t--){

   int n,m;
   cin>>n>>m;

   vector<vector<int>> grid;
   vector<vector<int>> vis(n, vector<int>(m,0));

   for(int i=0; i<n; i++){
    vector<int>row;
    for(int j=0; j<m;j++){
        int cell;
        cin>>cell;
        row.push_back(cell);
    }
    grid.push_back(row);
   }

   int max_v =0;

   for(int i=0;i<n; i++){
    for(int j=0; j<m; j++){
        if(grid[i][j]!=0 && !vis[i][j]){
            vis[i][j] =1;
            int volume= dfs(n,m,i,j,grid,vis)+grid[i][j];
            max_v = max(volume,max_v);
        }
    }
   }

   cout<<max_v<<endl;
    }

    return 0;
}
