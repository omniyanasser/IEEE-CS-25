#include <iostream>
#include<algorithm>
#include<cmath>
using namespace std;

 int binarySearch(int towers[], int m, int city){
     int l=0, r= m-1;

     while(l<= r){
        int mid = (l+r)/2;
        if (towers[mid] < city) {
            l = mid + 1;
        } else{
            r =mid - 1;
        }
     }
     return l;
 }

int main()
{
    int n,m;
    cin>>n>>m;

    int cities[n];
    for(int i=0; i<n; i++){
        cin>>cities[i];
    }

    int towers[m];
    for(int i=0; i<m; i++){
        cin>>towers[i];
    }

    int minCover =0;

    for(int i=0; i<n; i++){
        int city =cities[i];
        int towerIndex = binarySearch(towers,m,city);

        int minDistance = INT_MAX;

        if(towerIndex < m){
            minDistance = abs(city - towers[towerIndex]);
        }

        if(towerIndex > 0){
            minDistance = min(minDistance ,abs(city - towers[towerIndex -1]));
        }

        minCover = max(minCover ,minDistance);
    }

    cout<<minCover<<endl;



    return 0;
}
