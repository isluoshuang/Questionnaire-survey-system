// #include <bits/stdc++.h>
#include <iostream>
using namespace std;

struct TreeNode{
	int data;
	TreeNode *left;
	TreeNode *right;
};
//已知先序中序求后序
void BinaryTreeOrder(int *pre_order, int *in_order, int length){
	//结束条件
	if(length == 0) return;

	TreeNode *root = new TreeNode;
	root->data = *pre_order;

	int root_node;
	for(root_node = 0; root_node < length; root_node++){
		if(in_order[root_node] == root->data) break;
	}

	BinaryTreeOrder(pre_order+1, in_order, root_node);//遍历左子树
	BinaryTreeOrder(pre_order+root_node+1, in_order+root_node+1, length-(root_node+1));//遍历右子树
	cout << root->data;

}

int main()
{
	int pre_order[6] = {1, 2, 3, 4, 5,6};
	int in_order[6] = {3, 2, 4, 1, 6, 5};
	BinaryTreeOrder(pre_order, in_order, 6);
	return 0;

}