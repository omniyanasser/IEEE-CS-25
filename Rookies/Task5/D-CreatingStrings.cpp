#include <iostream>
#include <algorithm>

using namespace std;
int freq[26];
string s;

int factorial(int n){
    if(n==0 || n==1){
        return 1;
    }

    return n* factorial(n-1);
}

int main()
{
    cin>>s;

    for(int i=0;i< s.length();i++){
        ++freq[s[i]- 'a'];
    }

    int strings = factorial(s.length());
    for(int i=0; i<26; i++){
        strings /= factorial(freq[i]);
    }

    cout<<strings<<endl;

    sort(s.begin(),s.end());

    do{
        puts(s.c_str());
    } while(next_permutation(s.begin(),s.end()));

    return 0;
}
